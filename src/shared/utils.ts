export const injectParamsIntoUrl = <Params extends {[K: string]: string}>(
  url: string,
  params: Params,
): string => {
  Object.keys(params).forEach(key => {
    const paramValue = params[key];
    if (paramValue) {
      url = url.replace(`:${key}`, encodeURIComponent(paramValue));
    }
  });

  return url;
};
