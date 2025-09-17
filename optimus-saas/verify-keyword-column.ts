// Verification script to test keyword column functionality
import { supabase } from './src/lib/supabase'

async function verifyKeywordColumn() {
  try {
    console.log('🔍 Testing keyword column functionality...')

    // Test 1: Try to select including keyword column
    console.log('\n1. Testing SELECT with keyword column...')
    const { data: selectTest, error: selectError } = await supabase
      .from('articles')
      .select('id, title, keyword')
      .limit(1)

    if (selectError) {
      if (selectError.message.includes('column "keyword" does not exist')) {
        console.log('❌ Keyword column does not exist yet')
        console.log('👉 Please run the SQL from KEYWORD_COLUMN_SQL.md in Supabase SQL Editor')
        return false
      } else {
        console.log('❌ Unexpected error:', selectError.message)
        return false
      }
    }

    console.log('✅ Keyword column exists and is selectable')

    // Test 2: Try to insert with keyword
    console.log('\n2. Testing INSERT with keyword...')
    const testKeyword = `test-keyword-${Date.now()}`

    const { data: insertTest, error: insertError } = await supabase
      .from('articles')
      .insert([{
        title: 'Test Keyword Article',
        content: 'This is a test article to verify keyword functionality.',
        slug: `test-keyword-${Date.now()}`,
        excerpt: 'Test excerpt',
        read_time: '1 min',
        published: false,
        meta_description: 'Test description',
        keyword: testKeyword
      }])
      .select()
      .single()

    if (insertError) {
      console.log('❌ Insert error:', insertError.message)
      return false
    }

    console.log('✅ Successfully inserted article with keyword:', testKeyword)
    console.log('📝 Article ID:', insertTest.id)

    // Test 3: Try to insert duplicate keyword (should fail)
    console.log('\n3. Testing unique constraint...')
    const { error: duplicateError } = await supabase
      .from('articles')
      .insert([{
        title: 'Duplicate Keyword Test',
        content: 'This should fail due to duplicate keyword.',
        slug: `duplicate-test-${Date.now()}`,
        excerpt: 'Test excerpt',
        read_time: '1 min',
        published: false,
        meta_description: 'Test description',
        keyword: testKeyword // Same keyword as above
      }])

    if (duplicateError) {
      if (duplicateError.message.includes('duplicate key value violates unique constraint')) {
        console.log('✅ Unique constraint working correctly - duplicate rejected')
      } else {
        console.log('❓ Unexpected duplicate error:', duplicateError.message)
      }
    } else {
      console.log('⚠️  Duplicate insertion succeeded - unique constraint may not be working')
    }

    // Test 4: Clean up test data
    console.log('\n4. Cleaning up test data...')
    const { error: deleteError } = await supabase
      .from('articles')
      .delete()
      .eq('keyword', testKeyword)

    if (deleteError) {
      console.log('⚠️  Could not clean up test data:', deleteError.message)
    } else {
      console.log('✅ Test data cleaned up successfully')
    }

    console.log('\n🎉 Keyword column verification completed successfully!')
    return true

  } catch (error) {
    console.error('💥 Verification failed:', error)
    return false
  }
}

verifyKeywordColumn()