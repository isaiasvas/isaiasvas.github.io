import { profileData } from '../data/profile';

/**
 * Envia um webhook notificando o download do currículo e exibe todos os detalhes no console.
 * @param {string} origin - Local de onde o download foi acionado (ex: 'hero', 'header_desktop', 'footer')
 */
export async function trackResumeDownload(origin = 'indefinido') {
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || profileData.webhookUrl;

  const payload = {
    event: 'download_curriculo',
    origin,
    file: 'curriculo-isaias-silva.pdf',
    timestamp: new Date().toISOString(),
    dataHoraLocal: new Date().toLocaleString('pt-BR'),
    pagina: window.location.href,
    referencia: document.referrer || 'Acesso direto',
    navegador: navigator.userAgent,
    idioma: navigator.language,
    resolucao: `${window.screen.width}x${window.screen.height}`,
  };

  console.group('%c🚀 [Webhook] Disparo de Download de Currículo', 'color: #0284c7; font-weight: bold; font-size: 13px;');
  console.log('%c📍 Origem do Clique:', 'font-weight: bold; color: #475569;', origin);
  console.log('%c🔗 URL do Webhook:', 'font-weight: bold; color: #475569;', webhookUrl);
  console.log('%c📦 Payload Enviado:', 'font-weight: bold; color: #475569;', payload);

  if (!webhookUrl || webhookUrl.includes('SEU-UUID-AQUI')) {
    console.warn(
      '%c⚠️ [Webhook] URL do Webhook não configurada!\n' +
      'Para ver a requisição chegando no webhook.site:\n' +
      '1. Acesse https://webhook.site\n' +
      '2. Copie a "Your unique URL"\n' +
      '3. Cole em "webhookUrl" no arquivo src/data/profile.js',
      'color: #d97706; font-weight: bold;'
    );
    console.groupEnd();
    return { success: false, reason: 'unconfigured_url', payload };
  }

  try {
    const startTime = performance.now();
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const duration = Math.round(performance.now() - startTime);
    const responseText = await response.text();

    console.log(
      `%c✅ [Webhook] Consumido com sucesso em ${duration}ms!`,
      'color: #16a34a; font-weight: bold; font-size: 12px;'
    );
    console.log('%c📊 Status HTTP:', 'font-weight: bold;', `${response.status} ${response.statusText}`);
    console.log('%c📥 Resposta do Servidor:', 'font-weight: bold;', responseText || '(vazia)');
    console.groupEnd();

    return {
      success: response.ok,
      status: response.status,
      duration,
      response: responseText,
      payload,
    };
  } catch (error) {
    console.error('%c❌ [Webhook] Erro na requisição HTTP:', 'color: #dc2626; font-weight: bold;', error);
    console.groupEnd();
    return { success: false, error, payload };
  }
}
