export class MDYDate {
    private dateList: number[];

    constructor(month: number, day: number, year: number) {
        this.dateList = [year, month, day];
    }

    public before(other: MDYDate): boolean {
        return this.firstNonzero_diff(other) < 0;
    }

    public is_same(other: MDYDate): boolean {
        return this.firstNonzero_diff(other) === 0;
    }

    public after(other: MDYDate): boolean {
        return this.firstNonzero_diff(other) > 0;
    }

    public between(lower: MDYDate, upper: MDYDate) {
        return (this.after(lower) || this.is_same(lower)) && (this.before(upper) || this.is_same(upper));
    }

    public firstNonzero_diff(other: MDYDate): number {
        /*
        internal method
        finds the first item of the diff between the two dates that isn't 0
        if there isn't one it will return 0 though. This is just to ensure it returns a number.
        */

        const diff = this.diff(other);
        const firstNonzero = diff.find((v) => v !== 0);

        return firstNonzero !== undefined ? firstNonzero : 0;
    }

    private diff(other: MDYDate): number[] {
        /*
        internal method
        what this basically does is return the result of "subtracting" this.dateList and other.dateList
        what this means is basically result[i] = this.dateList[i] - other.dateList[i]
        */

        let resultList = this.dateList.slice();

        for (let index = 0; index < resultList.length; index++) {
            resultList[index] -= other.dateList[index];
        }

        return resultList;
    }
}
