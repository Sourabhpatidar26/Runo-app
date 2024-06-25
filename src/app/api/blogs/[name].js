export async function GET() {
  console.log("blog api runs...")
    return Response.json({ data:"blogs" })
  }