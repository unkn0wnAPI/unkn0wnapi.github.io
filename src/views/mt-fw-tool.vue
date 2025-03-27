<script setup>
import Title from "../components/mt-fw-tool-page/Title.vue";
import { ref } from "vue";

// Define the formData and showOutput as reactive references
const formData = ref("");
const showOutput = ref(false); // Initially false to keep output hidden
const outputText = ref(""); // Ref to store and display the output string

// Function to generate pairs
const generatePairs = (arr) => {
  let pairs = [];

  // Nested loop to generate each possible pair in both directions
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        // Ensure no pair is made with itself
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
};

// Function to handle form submission
const formOnSubmit = (e) => {
  // Prevent form submission
  e.preventDefault();

  // Process form data (split into an array and trim whitespace)
  const networks = formData.value.split("\n").map((item) => item.trim());
  const networkPairs = generatePairs(networks);

  // Set showOutput to true to display the output section
  if (networks.length != 0 && networks[0] != "") showOutput.value = true;

  // Build the output string
  let outputString = "";
  networkPairs.forEach((pair) => {
    outputString += `/ip firewall filter add chain=forward src-address=${pair[0]} dst-address=${pair[1]} action=drop comment="Block ${pair[0]}<->${pair[1]}";\n`;
  });

  // Update the outputText ref to display the result in the <pre> tag
  outputText.value = outputString;
};

// Function to reset the form and hide output
const resetForm = () => {
  formData.value = ""; // Reset form data
  showOutput.value = false; // Hide the output
  outputText.value = ""; // Clear the output text
};
</script>

<template>
  <main>
    <div class="container">
      <Title name="Mikrotik Firewall Tool" />
      <p>
        Quickly generate firewall rules (for RouterOS devices), that will
        separate and block traffic between networks provided in the input.
      </p>

      <form @submit.prevent="formOnSubmit" class="form">
        <textarea
          v-model="formData"
          placeholder="Enter networks with CIDR notation (one per line)"
          class="textarea"
        ></textarea>
        <div class="button-container">
          <button type="submit" class="submit-btn">Generate Pairs</button>
          <button type="button" @click="resetForm" class="reset-btn">
            Reset
          </button>
        </div>
      </form>
      <pre v-if="showOutput" class="output">{{ outputText }}</pre>
    </div>
  </main>
</template>

<style scoped>
@media (max-width: 768px) {
  .container {
    justify-content: flex-start !important;
  }
}
/* Center the entire container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  padding: 20px;
}

/* Style for the form */
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  width: 100%;
}

/* Style for textarea */
.textarea {
  padding: 10px;
  font-size: 14px;
  width: 100%;
  height: 150px;
  resize: vertical;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* Style for button container to align buttons inline */
.button-container {
  display: flex;
  gap: 10px; /* Adds space between the buttons */
  width: 100%;
}

/* Style for submit button */
.submit-btn {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 49%; /* Cut the width in half */
  margin-right: 2%; /* Add some space between the buttons */
  font-family: "solaris-2", sans-serif !important;
}

.submit-btn:hover {
  background-color: #45a049;
}

/* Style for reset button */
.reset-btn {
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 49%; /* Cut the width in half */
  font-family: "solaris-2", sans-serif !important;
}

.reset-btn:hover {
  background-color: #e53935;
}

/* Style for the form input */
textarea {
  border: 1px solid var(--vt-c-white);
  color: var(--vt-c-white);
  border-radius: 4px;
  padding: 0.2em 0.6em;
  margin-top: 10px;
  background: transparent;
  transition: background-color 0.5s;
}

/* Style for the output (pre tag) */
.output {
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  height: 200px; /* Set a fixed height for the scrollable area */
  white-space: pre-wrap; /* Ensures text wraps within the pre tag */
  word-wrap: break-word; /* Allows long words to break and wrap */
  border-radius: 4px;
  border: 1px solid #ccc;
  overflow-y: auto; /* Enable vertical scrolling when content exceeds height */
  overflow-x: hidden; /* Hide horizontal scrolling if not necessary */
}
</style>
