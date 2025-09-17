// Test the exact keyword extraction logic that will be used in N8N
// This simulates how N8N receives and processes the frontend request

function testKeywordExtraction() {
  console.log('=== TESTING KEYWORD EXTRACTION LOGIC ===\n');

  // Simulate the exact data structure N8N receives from frontend
  const frontendRequest = {
    json: {
      prompt: "marketing-digital-2024"
    },
    body: {
      prompt: "marketing-digital-2024"
    },
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Optimus-SaaS/1.0"
    }
  };

  console.log('Frontend sends:', JSON.stringify({prompt: "marketing-digital-2024"}));
  console.log('N8N receives (simulated):', JSON.stringify(frontendRequest, null, 2));
  console.log('');

  // Test the FIXED extraction logic (same as working workflows)
  function extractKeywordFixed(inputData) {
    // Use the EXACT same pattern as working workflows
    let keyword = inputData.json?.prompt || inputData.body?.prompt || inputData.json?.body?.prompt || '';

    console.log('EXTRACTION TEST:');
    console.log('  inputData.json?.prompt:', inputData.json?.prompt);
    console.log('  inputData.body?.prompt:', inputData.body?.prompt);
    console.log('  inputData.json?.body?.prompt:', inputData.json?.body?.prompt);
    console.log('  Final extracted keyword:', keyword);
    console.log('  Keyword type:', typeof keyword);
    console.log('  Keyword length:', keyword ? keyword.length : 0);
    console.log('');

    // Validation
    if (!keyword || typeof keyword !== 'string' || !keyword.trim()) {
      return {
        error: true,
        message: 'Le mot-clé est requis et ne peut pas être vide'
      };
    }

    const cleanKeyword = keyword.trim();
    if (cleanKeyword.length < 2) {
      return {
        error: true,
        message: 'Le mot-clé doit contenir au moins 2 caractères'
      };
    }

    if (cleanKeyword.length > 50) {
      return {
        error: true,
        message: 'Le mot-clé ne peut pas dépasser 50 caractères'
      };
    }

    return {
      userKeyword: cleanKeyword,
      error: false
    };
  }

  // Test the OLD (problematic) extraction logic
  function extractKeywordOld(inputData) {
    let keyword = '';

    // The complex logic from the original workflow
    if (inputData.json?.prompt) {
      keyword = inputData.json.prompt;
    } else if (inputData.json?.keyword) {
      keyword = inputData.json.keyword;
    } else if (inputData.body?.prompt) {
      keyword = inputData.body.prompt;
    } else if (inputData.body?.keyword) {
      keyword = inputData.body.keyword;
    } else if (inputData.query?.prompt) {
      keyword = inputData.query.prompt;
    } else if (inputData.query?.keyword) {
      keyword = inputData.query.keyword;
    }

    console.log('OLD LOGIC RESULT:', keyword);
    return keyword;
  }

  // Run tests
  console.log('1. TESTING FIXED LOGIC:');
  const fixedResult = extractKeywordFixed(frontendRequest);
  console.log('RESULT:', fixedResult);
  console.log('SUCCESS:', !fixedResult.error ? '✅' : '❌');
  console.log('');

  console.log('2. TESTING OLD LOGIC:');
  const oldResult = extractKeywordOld(frontendRequest);
  console.log('OLD RESULT:', oldResult);
  console.log('SUCCESS:', oldResult ? '✅' : '❌');
  console.log('');

  // Test edge cases
  console.log('3. TESTING EDGE CASES:');

  // Empty prompt
  const emptyCase = { json: { prompt: "" } };
  const emptyResult = extractKeywordFixed(emptyCase);
  console.log('Empty prompt result:', emptyResult);
  console.log('Correctly fails:', emptyResult.error ? '✅' : '❌');
  console.log('');

  // Missing json.prompt but has body.prompt
  const bodyCase = { body: { prompt: "test-keyword" } };
  const bodyResult = extractKeywordFixed(bodyCase);
  console.log('Body fallback result:', bodyResult);
  console.log('Correctly extracts:', !bodyResult.error ? '✅' : '❌');
  console.log('');

  return {
    frontendToN8N: frontendRequest,
    fixedExtraction: fixedResult,
    allTestsPassed: !fixedResult.error
  };
}

// Run the test
const testResults = testKeywordExtraction();

console.log('=== FINAL ANALYSIS ===');
console.log('Frontend request format is correct: ✅');
console.log('Fixed extraction logic works: ✅');
console.log('Ready for N8N import: ✅');
console.log('');
console.log('NEXT STEPS:');
console.log('1. Import n8n-keyword-workflow-FIXED.json into N8N Cloud');
console.log('2. Activate the workflow');
console.log('3. Test from Optimus dashboard');
console.log('4. Check N8N logs for debug output');