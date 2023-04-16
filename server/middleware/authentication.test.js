import jwt from "jsonwebtoken";
import authentication from "./authentication";

describe("authentication", () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = {
      headers: {},
    };
    res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    next = jest.fn();
  });

  it("should return 401 if no token is provided", () => {
    authentication(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith("Unauthorized");
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 401 if an invalid token is provided", () => {
    const token = "invalid-token";
    req.headers.authorization = `Bearer ${token}`;
    authentication(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith("Unauthorized");
    expect(next).not.toHaveBeenCalled();
  });
});
