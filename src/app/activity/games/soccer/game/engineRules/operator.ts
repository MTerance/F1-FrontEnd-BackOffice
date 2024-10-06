
export enum Operator {
    CONTAINS = 'contains',
    EQUALS = 'equals',
    GREATER = 'greater',
    GREATER_OR_EQUAL = 'greater_or_equal',
    LESS = 'less',
    LESS_OR_EQUAL = 'less_or_equal',
}

/*
export class Rule {
    field?: string;
    operator?: Operator;
    value: any;
}
*/

export type RuleCondition = [string,Operator, string];

export enum Action {
    ADD = 'add',
    REMOVE = 'remove',
    UPDATE = 'update',
    NOTIFY = 'notify',
    EXECUTE = 'execute',
}

export type Effect = {
    action: Action;
    property?: string;
    value?: number;
    error?: {message: string, code: number}
};

export class RuleEffect {
    conditions ?: RuleCondition[];
    effect ?: Effect;
}

export type Rule = Record<string,RuleEffect>;


export class RuleEngine {
    private readonly rules: Rule;

    constructor(rules: Rule) {
        this.rules = rules;
    }

    getOperator(operator: Operator) {
        switch (operator) {
            case Operator.CONTAINS:
                return (field: string, value: any) => field.includes(value);
            case Operator.EQUALS:
                return (field: string, value: any) => field === value;
            case Operator.GREATER:
                return (field: number, value: any) => field > value;
            case Operator.GREATER_OR_EQUAL:
                return (field: number, value: any) => field >= value;
            case Operator.LESS:
                return (field: number, value: any) => field < value;
            case Operator.LESS_OR_EQUAL:
                return (field: number, value: any) => field <= value;
            default:
                throw new Error(`No matching operator found for ${operator}`);
        }
    }

    

}