export default function ObjectKeychain(object: object, nodes: Array<any>): boolean{

    const tester: Function = (pattern) => eval('object.' + pattern);
    let pattern: string = nodes[0];

    if(!tester(pattern))
        return false;

    for(let i: number = 1; i < nodes.length; i++){
        let newPattern: string = `${pattern}.${nodes[i]}`;
        if(tester(newPattern)){
            pattern = newPattern;
        }else{
            return false;
        }
    }
    return true;
}