require('dotenv').config({ path: '../.env' });

console.log('🔍 SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('🔍 SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? 'Đã có giá trị' : 'Không có giá trị');

const { createClient } = require('@supabase/supabase-js');

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    console.error('❌ Lỗi: Chưa thiết lập SUPABASE_URL hoặc SUPABASE_ANON_KEY trong .env');
    process.exit(1);
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function testConnection() {
    try {
        const { data, error } = await supabase.from('events').select('*').limit(1);
        if (error) throw error;
        console.log('✅ Kết nối Supabase thành công!', data);
    } catch (err) {
        console.error('❌ Lỗi kết nối Supabase:', err);
    }
}

testConnection();
