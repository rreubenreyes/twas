const ONE_DAY_IN_MS = 60 * 60 * 24 * 1000;

function decay(x: number, decayRate: number, decayOffset: number) {
  return 1 / (1 + Math.E ** (decayRate * (x - decayOffset)));
}

export const recency = (timestamp: number) => {
  const decayRate = 0.3;
  const decayOffset = 35;

  const diff = (Date.now() - timestamp) / ONE_DAY_IN_MS;

  return decay(diff, decayRate, decayOffset);
};

export const frecency = (frequency: number, date: Date) => {
  const timestamp = date.getTime();
  return 0.25 * frequency * recency(timestamp);
};
