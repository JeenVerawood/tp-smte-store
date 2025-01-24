/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // ระบุเส้นทางไฟล์ที่ต้องการใช้ Tailwind CSS
  ],
  theme: {
    extend: {
      fontFamily: {
        // เพิ่มฟอนต์ที่ต้องการใช้งาน
        ibm: ['"IBM Plex Sans Thai"', 'sans-serif'],
        karantina: ['Karantina', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        schoolbell: ['Schoolbell', 'cursive'],
      },
    },
  },
  plugins: [],
};
