class Error {}

export class ApiError extends Error {
  constructor(msg) {
    super(msg);
    this.msg = msg || 'There was an error reaching the external API.';
  }
}