interface Entry {
  amount: number;
  account: string | null;
  category: string | null;
  payee: string | null;
  notes: string | null;
}

type State = "account" | "amount" | "category" | "payee" | "notes";

const isDigit = (s: string) => s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57;
const isLetter = (s: string) =>
  (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90) ||
  (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122);
const isWhitespace = (s: string) => /\s/.test(s);

export function parse(s: string): Entry {
  s = s.trim();

  let amount: string = "";
  let negateAmount = true;
  let account: string = "";
  let category: string = "";
  let payee: string = "";
  let notes: string = "";

  let state: State = "account";
  for (const ss of s) {
    switch (state) {
      case "account":
        if (isLetter(ss)) {
          account += ss;
        } else if (isDigit(ss)) {
          amount += ss;
          state = "amount";
        }
        break;
      case "amount":
        if (isDigit(ss)) {
          amount += ss;
        } else if (isLetter(ss)) {
          category += ss;
          state = "category";
        } else if (ss == "+") {
          negateAmount = false;
          state = "payee";
        } else if (ss == "-") {
          state = "payee";
        } else if (ss == ":") {
          state = "notes";
        }
        break;
      case "category":
        if (isLetter(ss) || isWhitespace(ss)) {
          category += ss;
        } else if (ss == "+") {
          negateAmount = false;
          state = "payee";
        } else if (ss == "-") {
          state = "payee";
        } else if (ss == ":") {
          state = "notes";
        }
        break;
      case "payee":
        if (isLetter(ss) || isWhitespace(ss)) {
          payee += ss;
        } else if (ss == ":") {
          state = "notes";
        }
        break;
      case "notes":
        notes += ss;
        break;
      default:
        throw new Error("invalid state");
    }
  }

  return {
    amount: parseInt(amount, 10) * (negateAmount ? -1 : 1),
    account: account?.trim() || null,
    category: category?.trim() || null,
    payee: payee?.trim() || null,
    notes: notes?.trim() || null,
  };
}

export function log(s: string) {
  console.log(JSON.stringify(parse(s)));
}
