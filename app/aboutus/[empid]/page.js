'use client'

import Link from 'next/link';

export default function Developer({params}) {
 

const details = [

  { id : 1, name: 'Yash', role: 'Senior Developer'},
  
  { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
  
  { id : 3, name: 'Suresh', role: 'Frontend Developer'}
  
  ]

  const person = details.filter((item)=>{
    return item.id == (params.empid)
  })
  
    return (
      <>
    <div>Hi I'm Ritik
      <br/>
      <Link href={`/aboutus`}>AboutUs</Link>
    </div>
    <div>
      {person.length==0 && <h2>user not found</h2>}
      {person.length>0 && 
      <>
     <h2>{person[0].name}</h2>
     <h3>{person[0].role}</h3>
     </>
      }
    </div>
    </>
    )
  }