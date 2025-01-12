import { ref } from 'vue';

export interface IDuration {
    system: string;
    from: Date;
    to: Date;
};

export interface ITerm {
    ref: string;
    durations: IDuration[];
};

export interface IDataSet {
    label: string;
    data: number[];
};

const terms = ref<ITerm[]>([]);

export function useDurations() {

    const set = (duration: 
        { 
            reference: string,
            system: string,
            from: Date,
            to: Date 
        }) => {
        let term = terms.value.find(term => {
            return term.ref === duration.reference;
        }); 
        if (!term) {
            term = {
                ref: duration.reference,
                durations: []
            };
            terms.value.push(term);
        };
        let dur = term.durations.find(dur => {
            return dur.system === duration.system
        });
        if (!dur) {
            dur = {
                system: duration.system,
                from: duration.from,
                to: duration.to
            };
            term.durations.push(dur);
            return;
        };
        dur.from = duration.from;
        dur.to = duration.to;
    };

    const has = (reference: string) => {
        let term = terms.value.find(term => {
            return term.ref === reference;
        }); 
        if (term) {
            return true;
        };
        return false;
    };

    const labelSet = (options: {
        from: Date,
        to: Date,
        interval: 'monthly' | 'yearly'
    }): string[] => {
        let labelset: string[] = [];
        let position = new Date(options.from.getTime());
        position.setDate(1);
        position.setHours(0, 0, 0, 0);
        let end = new Date(options.to.getTime());
        end.setDate(1);
        end.setHours(0, 0, 0, 0);
        end.setMonth(end.getMonth() + 1);
        switch (options.interval) {
            case 'monthly':
                let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                while (position < end) {
                    let label = `${months[position.getMonth()]} ${position.getFullYear()}`;
                    labelset.push(label);
                    position.setMonth(position.getMonth() + 1);
                };
                break;
            case 'yearly':
                position.setMonth(0);
                while (position < end) {
                    let label = `${position.getFullYear()}`;
                    labelset.push(label);
                    position.setFullYear(position.getFullYear() + 1);
                };
                break;
        };
        return labelset;
    };

    const dataSet = (options: {
        from: Date,
        to: Date,
        reference: string,
        interval: 'monthly' | 'yearly'
    }): number[] => {
        let term = terms.value.find(term => {
            return term.ref === options.reference;
        }); 
        if (!term || term.durations.length === 0) {
            return [];
        };
        let dataset: number[] = [];
        let position = new Date(options.from.getTime());
        position.setDate(1);
        position.setHours(0, 0, 0, 0);
        let end = new Date(options.to.getTime());
        end.setDate(1);
        end.setHours(0, 0, 0, 0);
        end.setMonth(end.getMonth() + 1);
        switch (options.interval) {
            case 'monthly':
                while (position < end) {
                    let monthEnd = new Date(position.getTime());
                    monthEnd.setMonth(monthEnd.getMonth() + 1);
                    let segment = term.durations.filter(duration => {
                        return duration.from <= position &&
                            duration.to >= monthEnd;
                    });
                    if (!segment || segment.length === 0) {
                        dataset.push(0);
                    }
                    else {
                        dataset.push(segment.length)
                    };
                    position.setMonth(position.getMonth() + 1);
                };
                break;
            case 'yearly':
                position.setMonth(0);
                while (position < end) {
                    let yearEnd = new Date(position.getTime());
                    yearEnd.setFullYear(yearEnd.getFullYear() + 1);
                    let segment = term.durations.filter(duration => {
                        return duration.from <= position &&
                            duration.to >= yearEnd;
                    });
                    if (!segment || segment.length === 0) {
                        dataset.push(0);
                    }
                    else {
                        dataset.push(segment.length)
                    };
                    position.setFullYear(position.getFullYear() + 1);
                };
                break;
        };
        return dataset;
    };

    return {
        set,
        has,
        dataSet,
        labelSet
    };
};