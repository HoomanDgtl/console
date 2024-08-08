import { Hono } from "hono";

export class WalletService {
  constructor(private readonly app: Hono) {}

  async createUserAndWallet() {
    const userResponse = await this.app.request("/v1/anonymous-users", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" })
    });
    const { data: user, token } = await userResponse.json();
    const walletResponse = await this.app.request("/v1/wallets", {
      method: "POST",
      body: JSON.stringify({
        data: { userId: user.id }
      }),
      headers: new Headers({ "Content-Type": "application/json", authorization: `Bearer ${token}` })
    });
    const { data: wallet } = await walletResponse.json();

    return { user, token, wallet };
  }

  async getWalletByUserId(userId: string, token: string): Promise<{ id: number; address: string; creditAmount: number }> {
    const walletResponse = await this.app.request(`/v1/wallets?userId=${userId}`, {
      headers: new Headers({ "Content-Type": "application/json", authorization: `Bearer ${token}` })
    });
    const { data } = await walletResponse.json();

    return data[0];
  }
}
