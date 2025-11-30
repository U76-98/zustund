// GET Method
export function GET() {
  return Response.json({
    data: students,
  });
}

// Local array
let students = [
  {
    name: 'Akshay',
    dept: 'CSE'
  }
];

// POST Method
export async function POST(request) {
  const body = await request.json();
  const { name } = body;

  console.log(name);

  students.push({ name: name, dept: 'null' });

  return Response.json({
    data: students
  });
}

// PUT Method

// DELETE Method
