import { IService } from "../customInterfaces/customInterfaces";

export function assignRootClassName(width: number, componentName: string): string {
    if(width <= 600) return `${componentName}-mobile-screen`;
    else if(width > 600 && width <= 1100) return `${componentName}-tablet-screen`;
    else return `${componentName}-large-screen`;
}

export function getAvaiableServices(){

    const servicesArray: IService[] = [
        {
            serviceName: 'Почистване на твърди подови настилки',
            serviceSubCategories: [
                "Машинно почистване на твърди подови настилки",
                "Ръчно почистване на твърди подови настилки",
                "Прахосмукиране на твърди подови настилки",
                "Нанасяне на защитен полиер",
            ],
            prices: ["3 м2", "2 м2", '1.50 м2', '9 (два слоя)']
        },
        {
            serviceName: 'Машинно пране на меки подови настилки',
            serviceSubCategories: [
                "Килими до 50 кв.м.", "Килими над 50 кв.м.", "Мокети до 50 кв.м.", "Мокети до 50 кв. м."],
            prices: ['6.50 м2', '4.50 м2', '6.50 м2', '4.50 м2']
        },
        {
            serviceName: 'Машинно пране на матраци',
            serviceSubCategories: [
                'Матрак за спалня (еднолицев)', 
                'Матрак за единично легло (еднолицев)', 
                'Матрак за спалня (двулицев)',
                'Матрак за единично легло (двулицев)',
                'Матрак за бебешко легло (двулицев)',],
            prices: ['45 брой', '30 брой', '70 брой', '50 брой', '40 брой']
        },
        {
            serviceName: 'Почистване на прозорци, дограма, щори и др.',
            serviceSubCategories: [
                'Единично почистване на стъкла до 3м',
                'Единично почистване на стъкла над 3м',
                'Единично измиване на дограма до 3м',
                'Единично измиване на дограма над 3м',
                'Почистване на комарници',
                'Почистване на хоринзотални щори',
                'Почистване на ролетни щори',
                'Машинно пране на текстилни',
            ],
            prices: ['2 м2', '4 м2', '3 м2', 'По договаряне след оглед', '10 брой', '9 м2', '9 м2']
        },
        {
            serviceName: 'Машинно пране на мека мебел',
            serviceSubCategories: [
                'Диван 2-ка', 'Диван 3-ка', 'Холен, ъглов диван', 'Кухненски ъглов диван','Фотьойл',
                'Табуретка', 'Стол без облегалка', 'Стол с обегалка', 'Офис стол',
                'Декоративни възглавници (цената е в зависимост от големината)',],
            prices: ['60 брой', '80 брой', '120 брой', '100 брой', '35 брой', '25 брой', '10 брой', '15 брой', '20 брой', '7 до 15']
        },
        {
            serviceName: 'Почистване и полиране на кожена мека мебел',
            serviceSubCategories: [
                'Диван кожен 2-ка',
                'Диван 3-ка',
                'Холов ъглов кожен диван',
                'Кухненски ъглов кожен диван',
                'Фотьойл',
                'Табуретка',
                'Стол кожен без облекалка',
                'Офис стол кожен',
                'Декоративни кожени възглавници',
            ],
            prices: ['70 брой', '100 брой', '150 брой', '120 брой', 65, 50, '40 брой', '50 брой', '20 до 25 брой']
        },
        {
            serviceName: 'Почистване и дезинфекция на санитарни помещения',
            serviceSubCategories: [
                'Санитарен фаянс (мивки, тоалетна чиния, биде и пр.)',
                'Вана, душ-кабина, джакузи',
                'Комплексно почистване',
            ],
            prices: []
        },
        {
            serviceName: 'Почистване и дезинфекция на домакински електроуреди',
            serviceSubCategories: [
                'Фурна (външно)',
                'Фурна (основно)',
                'Котлони (основно)',
                'Хладилник (външно)',
                'Хладилник (основно)',
                'Пералня (външно)',
                'Пералня (основно)',
                'Микровълнова фурна (външно)',
                'Микровълнова фурна (основно)',
                'Съдомиялна (външно)',
                'Съдомиялна (основно)',
                'Малки електроуреди',
                'Почистване на климатици (вътрешно и външно)',
                'Комплексно почистване',
            ],
            prices: ['30 брой', '70 брой', '35 брой', '30 брой', '70 брой', '30 брой', '55 брой', '20 брой', '30 брой', '20 брой', '50 брой', '25 до 50', '300 до 500']
        },
        {
            serviceName: 'Други услуги',
            serviceSubCategories: [
                    'Радиатори и лири', 
                    'Премахване на паяжини', 
                    'Почистване на стъпала',
                    'Почистване на осветителни тела (цената е в зависимост от големината)',
                    'Почистване на интериорни врати',
                    'Косене на ливада'
                ],
            prices: [25, 30, 3, '30 до 70', 15, 'По договаряне в']
        },
    ];

    return servicesArray;
}

export function getPartOfAvaiableServices() {
    const getAllServices: IService[] = getAvaiableServices();
    const partOfServices: IService[] = [];

    for(let i = 0; i < 3; i++) {
        partOfServices.push(getAllServices[i])
    }

    return partOfServices;
}

export function getAvaiableLocations() {
    const locations: string[] = ["София", "Перник", "Радомир"];

    return locations;
}