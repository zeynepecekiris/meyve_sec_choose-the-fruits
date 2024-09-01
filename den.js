let fruit = 'apple';

switch(fruit) {
    case 'apple':
        console.log('You selected an apple.');
        break; // Bu, 'apple' case'inden sonra switch ifadesini sonlandırır.
    case 'banana':
        console.log('You selected a banana.');
        break;
    case 'orange':
        console.log('You selected an orange.');
        break;
    default:
        console.log('Unknown fruit.');
}