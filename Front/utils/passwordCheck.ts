export const passwordMinLength = 8;
export const passwordMaxLength = 50;
const strictCriteriaWeights = {
  minLenght: 7 / 10,
  maxLenght: 0,
  oneDigit: 1 / 10,
  oneUppercase: 1 / 10,
  oneSpecialCharacter: 1 / 10,
};

const permissiveCriteriaWeights = {
  minLenght: 10 / 10,
  maxLenght: 0,
  oneDigit: 0 / 10,
  oneUppercase: 0 / 10,
  oneSpecialCharacter: 0 / 10,
};

export function getCriteriaSatisfactionObject({
  password,
  strict = false,
}: {
  password: string;
  strict?: boolean;
}) {
  if (strict) {
    const criteria = {
      minLenght: password.length >= passwordMinLength,
      maxLenght: password.length <= passwordMaxLength,
      oneDigit: /\d/.test(password),
      oneUppercase: /[A-Z]/.test(password),
      oneSpecialCharacter: /[^a-zA-Z0-9]/.test(password),
    };
    return criteria;
  }
  const criteria = {
    minLenght: password.length >= passwordMinLength,
    maxLenght: password.length <= passwordMaxLength,
  };

  return criteria;
}

export function isPasswordValid({
  password,
  strict = false,
}: {
  password: string;
  strict?: boolean;
}): boolean {
  const criteria = getCriteriaSatisfactionObject({ password, strict });
  return Object.values(criteria).every((criterion) => criterion);
}

export const calculatePasswordProgress = ({
  password,
  strict = false,
}: {
  password: string;
  strict?: boolean;
}): number => {
  const criteriaSatisfactionObject = getCriteriaSatisfactionObject({
    password,
    strict,
  });
  const criteriaWeights = strict
    ? strictCriteriaWeights
    : permissiveCriteriaWeights;
  let basePercentage = 0;

  if (password.length >= passwordMinLength) {
    basePercentage = criteriaWeights.minLenght * 100;
  } else {
    basePercentage = (password.length / passwordMinLength) * 50;
  }

  for (const key in criteriaSatisfactionObject) {
    if (key !== 'maxLenght' && key !== 'minLenght') {
      basePercentage += criteriaSatisfactionObject[key]
        ? criteriaWeights[key] * 100
        : 0;
    }
  }

  return basePercentage;
};
