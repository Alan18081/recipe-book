export class AuthService {
  loggedIn = false;
  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      });
    });
  }
  login(): void {
    this.loggedIn = true;
  }
  logout(): void {
    this.loggedIn = false;
  }
}