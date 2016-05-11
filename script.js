/// <reference path="typings/main.d.ts" />
    
    $().ready(function() {
        var data = [
        'Peter',
        'Paul',
        'Stephen',
        'Mary',
        'Bertie',
        'Beverley',
        'Shola'  
        ];

        options = {
            highlight: true,
            hint: true,
            minLength: 0
        };

        $('input.typeahead').typeahead({
            name: 'names',
            local: [
                'Peter',
                'Paul',
                'Stephen',
                'Mary',
                'Bertie',
                'Beverley',
                'Shola'  
            ]
        });
        
        console.log('we are running.');
    
    });    