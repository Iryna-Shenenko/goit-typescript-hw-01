const user: { 
    age: number; 
    username: string; 
    toggle: boolean; 
    empty: null; 
    callback: (a: number) => number;
} = {
    age: 50,
    username:'Max',
    toggle:true,
    empty: null,
    callback: (a: number) =>{ return 100 + a },
};