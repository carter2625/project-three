export default async function handler(request, res) {
    const outline = [
        {
            "weekDate" : '1',
            "completionTime" : '2',
            "array" : [],
            "title" : 'Introduction',
            "info" : 'Why take this course?',
            "videos" : '4',
            "courses" : 'some stuff',
            "readings" : '11',
            "quizzes" : '0',
            "opened" : false
        },
        {
            "weekDate" : '2',
            "completionTime" : '3',
            "array" : [],
            "title" : 'Body 1',
            "info" : 'What is this course',
            "videos" : '3',
            "courses" : 'more stuff',
            "readings" : '2',
            "quizzes" : '1',
            "opened" : false
        },
        {
            "weekDate" : '3',
            "completionTime" : '4',
            "array" : [],
            "title" : 'Body 2',
            "info" : 'Whats next',
            "videos" : '2',
            "courses" : 'a lot of stuff',
            "readings" : '4',
            "quizzes" : '1',
            "opened" : false
        },
    ];

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(outline);
  }