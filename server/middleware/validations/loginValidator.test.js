import loginValidator from './loginValidator';

describe('loginValidator', () => {
  it('should return a 400 error if username or password is missing', () => {
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const next = jest.fn();

    loginValidator(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith('Username or password is missing');
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next if username and password are present', () => {
    const req = { body: { username: 'test', password: 'password' } };
    const res = { status: jest.fn(), send: jest.fn() };
    const next = jest.fn();

    loginValidator(req, res, next);

    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
