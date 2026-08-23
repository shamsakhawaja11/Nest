import { Injectable } from "@nestjs/common";
import { PaymentProvider } from "./service";

@Injectable()
export class MockPAymentService implements PaymentProvider{
    charge(amount: number): Promise<{ success: boolean; provider: string; }> {
        return{ success: true, provider: 'mock' }
    }
}