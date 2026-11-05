const company = {
    name: "TechNova Solutions",
    role: "CEO",
    employees: [
        {
            name: "Rahul Sharma",
            role: "CTO",
            employees: [
                {
                    name: "Amit Verma",
                    role: "Engineering Manager",
                    employees: [
                        {
                            name: "Priya",
                            role: "Senior Developer",
                            employees: []
                        },
                        {
                            name: "Karan",
                            role: "Frontend Developer",
                            employees: []
                        },
                        {
                            name: "Neha",
                            role: "Backend Developer",
                            employees: []
                        }
                    ]
                },
                {
                    name: "Sneha Kapoor",
                    role: "UI/UX Manager",
                    employees: [
                        {
                            name: "Riya",
                            role: "UI Designer",
                            employees: []
                        },
                        {
                            name: "Arjun",
                            role: "UX Designer",
                            employees: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Anjali Mehta",
            role: "HR Manager",
            employees: [
                {
                    name: "Pooja",
                    role: "Recruiter",
                    employees: []
                },
                {
                    name: "Vikram",
                    role: "HR Executive",
                    employees: []
                }
            ]
        },
        {
            name: "Rohit Malhotra",
            role: "Marketing Manager",
            employees: [
                {
                    name: "Simran",
                    role: "SEO Specialist",
                    employees: []
                },
                {
                    name: "Deepak",
                    role: "Content Writer",
                    employees: []
                }
            ]
        }
    ]
};


function rec(obj)
{

console.log(obj.name);
let n=obj.employees.length;
 for(let i=0;i<n;i++)
 {
    rec(obj.employees[i]);
 }
   
}

rec(company);