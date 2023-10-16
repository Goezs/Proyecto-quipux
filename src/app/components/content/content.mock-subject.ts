interface Subject{
    code : string, 
    name : string,
    teacher : string,
    years : number[] 
}

export const SUBJECTS: Subject[] = [
    {code: 'SOC001', name: 'Geografía',
        teacher: 'Fabio León Restrepo',
        years: [6, 7, 8, 9, 10, 11]},

    {code: 'SOC002', name: 'Historia',
        teacher: 'Jaime Alberto Giraldo',
        years: [6, 7, 8]},

    {code: 'SOC003', name: 'Filosofía',
        teacher: 'Adriana Maria Zuluaga',
        years: [9, 10, 11]},

    {code: 'IDM001', name: 'Español',
        teacher: 'Fabiola Ramirez',
        years: [6, 7, 8, 9, 10, 11]},
        
    {code: 'IDM003', name: 'Inglés',
        teacher: 'Maria Dolores Smitch',
        years: [6, 7, 8, 9, 10, 11]}
];