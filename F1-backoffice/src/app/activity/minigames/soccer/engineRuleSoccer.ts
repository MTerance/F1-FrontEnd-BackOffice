/*

export type Rule = Record<string,  {
    conditions : Condition[];
    effect : Effect;
}>;

export type RuleError = {
    message : string 
}

export type Condition = [
    string,
    Operator,
    string
];

export enum Operator {
    CONTAINS = "contains",
    LAST_TOUCH = "last player who touched the ball",
    PASS = "ball passed the limit of the field",
    FAULT = "fault on"
}

export type Effect = {
    action : Action;
    property ?: string;
    value ?: number;
    error ?: {message : string};
};

export enum Action {
    PENALTY,
    FREEKICK,
    FREEKICK_WITH_GOALKEEPER,
    THROW_IN,
    KICKOFF,
    OFFSIDE,
    FAULT,
    YELLOWCARD,
    REDCARD,
    HALFTIME,
}

export class RuleEngine {
    private readonly  rules : Rule;
    
    constructor(rules : Rule)
    {
        this.rules = rules;
    }

    getRule(ruleName: string) : {conditions : Condition[]; effect : Effect } {
        if (this.rules[ruleName]) 
            return this.rules[ruleName];
        throw new Error("no existing rule for " + ruleName);
    }

    getOperator(operator : Operator) : string {
        switch (operator) {
            case Operator.CONTAINS:
                return "contains";
            default :
                return "...";
        }
    }

    getFieldValue<T, F>(field: string, object: T, fallbackObject?: F): string {
        if (field[0] === '$') {
          const value = this.getObjectKeyValue<T>(field.substring(2), object);
          if (value) return value;
    
          if (!fallbackObject)
            throw new Error(
              `Object has no ${field.substring(2)} key, and no fallback object was provided`,
            );
    
          return this.getObjectKeyValue<T>(field.substring(2), fallbackObject);
        }
    
        return field;
      }
    
      getObjectKeyValue<T>(key: string, object: T): string {
        const keys: string[] = key.split(".");
        const value = keys.reduce((accumulator, currentValue) => {
          if (!accumulator[currentValue])
            throw new Error(`Object has no ${currentValue} key`);
          return accumulator[currentValue];
        }, object);
    
        return value;
      }
    
      conditionIsTruthy(left: string | string[], operator: Operator, right: string): boolean {
        const comparator = this.getOperator(operator);
    
        if (comparator === Operator.CONTAINS) {
          return Function(
            `"use strict"; return ('${left}'.includes('${right}'))`,
          )();
        }
    
        return Function(
          `"use strict"; return ('${left}' ${comparator} '${right}')`,
        )();
      }
    
      runEffect<T>(object: T, effect: Effect): T | null {
        const clonedObject = <T>structuredClone(object);
    
        switch (effect.action) {
          case Action.FAULT:
            clonedObject[effect.property] += effect.value;
            break;
          case Action.FREEKICK:
            clonedObject[effect.property] -= effect.value;
            break;
          case Action.FREEKICK_WITH_GOALKEEPER:
            clonedObject[effect.property] = effect.value;
            break;
            /*
          case Action.OMIT:
          case Action.OMIT_WITH_SILENT_ERROR:
            return effect.action;
        */
  /*        default:
            throw new Error(
              `${effect.action} not found in effect runner`,
            );
        }
    
        return clonedObject;
      }
    
      checkForMatchingRules<T, F>(object: T, fallback?: F): string[] {
        const matchedRules: string[] = [];
    
        for (const ruleName in this.rules) {
          const { conditions } = this.getRule(ruleName);
          let numberOfRulesMatched = 0;
    
          for (const condition of conditions) {
            const [leftField, operator, rightField] = condition;
            const left = this.getFieldValue<T>(leftField, object, fallback);
            const right = this.getFieldValue<T>(rightField, object, fallback);
    
            if (this.conditionIsTruthy(left, operator, right)) {
              numberOfRulesMatched++;
            } else break;
          }
    
          if (numberOfRulesMatched === conditions.length) {
            matchedRules.push(ruleName);
          }
        }
    
        return matchedRules;
      }
    
      applyRules<T, F>(objects: T[], fallback?: F): ApplyRulesResponse<T> {
        const results: T[] = [];
        const omitted: [T, RuleError][] = [];
    
        for (const object of objects) {
          const matchedRules: string[]
            = Engine.checkForMatchingRules<T, F>(object, fallback);
    
          if (!matchedRules.length)
            return results.push(object) && { results };
    
          for (const ruleName of matchedRules) {
            const { effect } = Engine.getRule(ruleName);
            const feedback = Engine.runEffect<T>(object, effect);
    
            switch (feedback) {
              // if feedback is "omit" or "omit_with_silent_error",
              // then we should omit the current object by not pushing
              // it to results array.
              case Action.OMIT:
                omitted.push([object, null]);
                continue;
              case Action.OMIT_WITH_SILENT_ERROR:
                omitted.push([object, { message: effect.error.message }]);
                continue;
              default:
                // push to results array by default
                results.push(object);
            }
          }
        }
    
        return { results, omitted };
      }
}*/