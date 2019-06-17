export class MDY_Date {
    private date_list: number[]; 

    constructor(month: number, day: number, year: number) {
        this.date_list = [year, month, day]; 
    } 

    public before(other: MDY_Date): boolean {
        return this.first_nonzero_diff(other) < 0; 
    } 

    public is_same(other: MDY_Date): boolean {
        return this.first_nonzero_diff(other) === 0; 
    } 

    public after(other: MDY_Date): boolean {
        return this.first_nonzero_diff(other) > 0; 
    } 

    public between(lower: MDY_Date, upper: MDY_Date) {
        return (this.after(lower) || this.is_same(lower)) && (this.before(upper) || this.is_same(upper)); 
    } 

    private diff(other: MDY_Date): number[] {
        /*
        internal method
        what this basically does is return the result of "subtracting" this.date_list and other.date_list
        what this means is basically result[i] = this.date_list[i] - other.date_list[i] 
        */ 

        let result_list = this.date_list.slice(); 

        for(let index = 0; index < result_list.length; index++) {
        result_list[index] -= other.date_list[index]; 
        } 

        return result_list; 
    } 

    private first_nonzero_diff(other: MDY_Date): number {
        /*
        internal method
        finds the first item of the diff between the two dates that isn't 0
        if there isn't one it will return 0 though. This is just to ensure it returns a number. 
        */ 

        const diff = this.diff(other); 
        const first_nonzero = diff.find((v) => v !== 0); 

        return first_nonzero !== undefined ? first_nonzero : 0; 
    } 
} 