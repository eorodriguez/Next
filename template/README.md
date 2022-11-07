template for nextjs projects:
nextjs
npx create-next-app@latest --ts
tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
prisma
npm install prisma -D
npx prisma init
npx prisma migrate dev --name "name"    <-- migration
npx prisma pull   <-- pulls existing db
npx prisma push -> creates db
