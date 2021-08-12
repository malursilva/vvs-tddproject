import { Money } from './money'

export class Expression {
    reduce: (to: string) => Money
}