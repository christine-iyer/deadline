import { useState, useEffect } from 'react'

export default function App(){
    /*
    Login, SignUp, CreateBookmark, ListBookmarksByUser, DeleteBookmark, UpdateBookmark
    */

   const handleChangeAuth = (event) => {
    setCredentials({...credentials, [event.target.name]: event.target.value })
   }
   const handleChange = (event) => {
    setBookmark({ ...bookmark, [event.target.name]: event.target.value })
   }
   const [credentials, setCredentials] = useState({
     email: '',
     password: '',
     name: ''
   })
   const [bookmark, setBookmark] = useState({
    heading: '',
     title: '',
     link: '',
     check: false
   })
   const [bookmarks, setBookmarks] = useState([])

   const [token, setToken] = useState('')
   const login = async () =>{
        try{
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        }catch(error){
            console.error(error)
        }
    }
   const signUp = async () =>{
    try{
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({...credentials})
        })
        const tokenResponse = await response.json()
        setToken(tokenResponse)
        localStorage.setItem('token', JSON.stringify(tokenResponse))
    }catch(error){
        console.error(error)
    }
    }
    const createBookmark = async () => {
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({...bookmark})
            })
            const data = await response.json() 
            setBookmarks([data,...bookmarks])
        } catch (error) {
            console.error(error)
        } finally {
            setBookmark({
                title: '',
                url: ''
            })
        }
    }
    const listBookmarksByUser = async () => {
        try {
            const response = await fetch('/api/users/bookmarks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            setBookmarks(data)
        } catch (error) {
            console.error(error)
        }
    } 
    const deletedBookmark = async(id) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await response.json()
            const bookmarksCopy = [...bookmarks]
            const index = bookmarksCopy.findIndex( bookmark => id === bookmark.id )
            bookmarksCopy.splice(index, 1)
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
    const updateBookmark = async(id, updatedData) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }, 
                body: JSON.stringify(updatedData)
            })
            const data = await response.json()
            const bookmarksCopy = [...bookmarks]
            const index = bookmarksCopy.findIndex( bookmark => id === bookmark.id )
            bookmarksCopy[index] = {...bookmarksCopy[index], ...updatedData} 
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        if(tokenData && tokenData !== 'null' && tokenData !== 'undefined'){
          listBookmarksByUser()
        }
    }, [])

    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        if(tokenData && tokenData !== 'null' && tokenData !== 'undefined'){
            setToken(JSON.parse(tokenData))
        }
    }, [])
 return (
    <>
    <h2>Login</h2>
    <form onSubmit={(e) => {
        e.preventDefault()
        login()
    }}>
        <input type="text" value={credentials.email} name="email" onChange={handleChangeAuth} placeholder={'Email Here'}></input>
        <input type="password" value={credentials.password} name="password" onChange={handleChangeAuth} placeholder={'Password'}></input>
        <input type="submit" value="Login as an Existing User"/>
    </form>
    <h2>SignUp</h2>
    <form onSubmit={(e) => {
        e.preventDefault()
        signUp()
    }}>
        <input type="text" value={credentials.email} name="email" onChange={handleChangeAuth} placeholder={'emil'}></input>
        <input type="text" value={credentials.name} name="name" onChange={handleChangeAuth} placeholder={'name'}></input>
        <input type="password" value={credentials.password} name="password" onChange={handleChangeAuth} placeholder={'password'}></input>
        <input type="submit" value="Sign Up as New User"/>
    </form>
    <h2>Create A Bookmark</h2>
    <form onSubmit={(e) => {
        e.preventDefault()
        createBookmark()
    }}>
        <input type="text" value={bookmark.heading} name="title" onChange={handleChange} placeholder={'heading'}></input>
        <input type="text" value={bookmark.title} name="url" onChange={handleChange} placeholder={'title'}></input>
        <input type="text" value={bookmark.link} name="title" onChange={handleChange} placeholder={'link'}></input>
        <input type="checkbox" checked={bookmark.check} onChange={(evt) => setBookmark({...bookmark, check: evt.target.checked })}></input>
        <input type="submit" value="Create Bookmark"/>
    </form>
    <ul>
        { bookmarks.length ? bookmarks.map(item => (
            <li key={item._id}>
                <h4>{item.heading}</h4>
                <a href={item.link} target="_blank"> {item.link}</a>
            </li>
        )): <>No BookMarks Added</>}
    </ul>
    </>
 )
}