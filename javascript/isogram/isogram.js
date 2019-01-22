const isIsogram = (word) => {
    const wordArray = word.toLowerCase().split("");

    for (const [i, outer_letter] of wordArray.entries()) {
        for (const [j, inner_letter] of wordArray.entries()) {
            if (j !== i) {

                if (outer_letter == inner_letter) {
                    return "Not an isogram!"
                }
                else {
                    return "Have an isogram!"
                }


                // do stuff
                // access locally-scoped outer loop member with outer_element
                // access locally-scoped inner loop member with inner_element
                // you can still access the outer scope using my_array[i] and my_array[j]
            }
        }
    }
};