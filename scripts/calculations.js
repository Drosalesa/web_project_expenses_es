let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

let balanceColor = "green";

for (const entrie of expenseEntries) {
  totalExpensesValue += entrie[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < 0.25 * budgetValue) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  let categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let largestCategory = "";
  let largestCategoryTotal = 0;

  let categoriesData = [[]];

  for (let i = 0; i < categories.length; i++) {
    categoriesData[i] = [
      categories[i],
      calculateCategoryExpenses(categories[i]),
    ];
  }

  for (i = 0; i < categoriesData.length; i++) {
    if (largestCategoryTotal < categoriesData[i][1]) {
      largestCategory = categoriesData[i][0];
      largestCategoryTotal = categoriesData[i][1];
    }
  }
  return largestCategory;
}

function addExpenseEntry(newExpense) {
  expenseEntries.push(newExpense);
  totalExpensesValue += newExpense[1];
}
