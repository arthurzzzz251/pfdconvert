import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.1.0';
import { convert } from 'npm:libreoffice-convert@2.1.1';
import { promisify } from 'node:util';

const convertAsync = promisify(convert);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const format = formData.get('format') as string;

    if (!file || !format) {
      return new Response(
        JSON.stringify({ error: 'File and format are required' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const buffer = await file.arrayBuffer();
    const convertedBuffer = await convertAsync(
      Buffer.from(buffer),
      format,
      undefined
    );

    return new Response(convertedBuffer, {
      headers: {
        ...corsHeaders,
        'Content-Type': `application/${format}`,
        'Content-Disposition': `attachment; filename="converted.${format}"`,
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Conversion failed' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});