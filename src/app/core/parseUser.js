"use server";

const { parse } = require("cookie");
const { config } = require("./config");
const { verify } = require("jsonwebtoken");

function parseUser(ctx) {
  if (!ctx.req.headers.cookie) {
    return null;
  }

  const token = parse(ctx.req.headers.cookie)[config.cookieName];

  if (!token) {
    return null;
  }

  try {
    const { iat, exp, ...user } = verify(token, config.jwtSecret);
    return user;
  } catch (e) {
    return null;
  }
}

export default parseUser;
