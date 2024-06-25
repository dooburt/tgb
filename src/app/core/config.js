function validateEnv(key, defaultValue, warnDefault = false) {
  const value = process.env[key];
  if (!value) {
    if (typeof defaultValue !== "undefined") {
      if (warnDefault) {
        const message = `validateEnv is using a default value for ${key} and has this warning enabled`;
        console.warn(new Error(message));
      }
      return defaultValue;
    } else {
      throw new Error(`${key} is not defined in environment variables`);
    }
  }

  return value;
}

export const config = {
  cookieName: "tgbtoken",
  clientId: validateEnv("DISCORD_CLIENT_ID"),
  clientSecret: validateEnv("DISCORD_CLIENT_SECRET"),
  appUri: validateEnv("APP_URI", "http://localhost:3000", true),
  jwtSecret: validateEnv("JWT_SECRET", "this is development secret that should be changed in production", true),
};
