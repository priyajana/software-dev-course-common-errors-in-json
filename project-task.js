/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = 
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  //Missing comma above
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      //Missing quotes for the key name
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      // fixing the undefined value of age to null
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    // Fixing the trailing comma at the end of value Parking in the below array
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
};


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I removed the template literals that commented the JSON object. VScode code linter helped me identify some errors.
Upon careful observation I was able to locate the other syntax errors and fix them.

2️⃣ How did you confirm that your corrected JSON file was valid?

I uploaded the original file to JSONLint online validator. It located the same errors that I was able to identify using VSCode.

3️⃣ Which errors were the most difficult to spot? Why?

Missing braces or brackets, missing quotes and trailing commas are a tad bit hard to identify. As we tend to focus on organizing and structuring the data, we may overlook these tiny details.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   * Using code linters like Prettier
   * Using Online JSON validators.
*/
