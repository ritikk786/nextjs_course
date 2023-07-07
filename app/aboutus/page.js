import Link from "next/link"
export default function About() {
  const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ]
    return (
    <div>AboutPage

      <ul>
        {details.map((item)=>(
          <li><Link href={`/aboutus/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  
    )
  }