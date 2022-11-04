import { createContext, useContext } from 'react'
// 创建Context对象
const C = createContext()

function Foo() {  
    return <div>Foo <Bar/></div>
}

function Bar() {  
    // 底层组件通过useContext函数获取数据  
    
    return <div>Bar {useContext(C)}</div>
}

function App() {  
    return (    
        // 顶层组件通过Provider 提供数据    
        <C.Provider value={'this is name'}>     
            <div><Foo/></div>    
        </C.Provider>  
    )
}

export default App