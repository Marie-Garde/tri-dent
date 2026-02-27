export const useEmailJS = () => {
  const config = useRuntimeConfig();

  return {
    serviceId: config.public.emailjsServiceId,
    templateId: config.public.emailjsTemplateId,
    publicKey: config.public.emailjsPublicKey,
  };
};
