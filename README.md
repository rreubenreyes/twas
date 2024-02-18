# `twas` - "it was $20"

A spend tracking tool for lazy people (me).

## Examples
It should track amounts
```bash
twas '20'
# { "amount": -20 }
```

It should track payees
```bash
twas '20 - Target'
# {
#   "amount": -20,
#   "payee": "Target"
# }
```

It should track spending categories
```bash
twas '20g - Target'
# {
#   "amount": -20,
#   "payee": "Target",
#   "category": "Groceries"
# }
```

It should track spending accounts
```bash
twas 'cf20g - Target'
# {
#   "amount": 20,
#   "payee": "Target",
#   "category": "Groceries",
#   "account": "Chase Freedom"
# }
```

It should handle deposits as well as payments
```bash
twas 'v20f + Alice'
# {
#   "amount": 20,
#   "payee": "Alice",
#   "category": "Food",
#   "account": "Venmo"
# }
```

It should handle notes
```bash
twas "v20f + Alice: Pepe's"
# {
#   "amount": 20,
#   "payee": "Alice",
#   "category": "Food",
#   "account": "Venmo",
#   "notes": "Pepe's"
# }
```

You can omit anything except amounts
```bash
twas '20+'
# {
#   "amount": 20
# }
```
