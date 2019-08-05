import React from 'react';
import poster1 from './images/poster1.jpg';
import poster2 from './images/poster2.jpg';
import poster3 from './images/poster3.jpg';
import poster4 from './images/poster4.jpg';

export const Movies = [
    {
        id: 1,
        title: "Ferris Bueller's Day Off",
        year: "1986",
        rating: 4,
        description: "A high school wise guy is determined to have a day off from school, despite what the principal thinks of that.",
        poster: poster1
    },


    {
        id: 2,
        title: "the shawshank redemption",
        year: "1994",
        rating: 2,
        description: `A prominent banker unjustly convicted of murder spends many years in the Shawshank prison.
         He is befriended by a convict who knows the ropes and helps him to cope with the frightening realities of prison life.`,
        poster: poster4
    },


    {
        id: 3,
        title: "Inception",
        year: "2010",
        rating: 5,
        description: `A thief who steals corporate secrets through the use of
        dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`,
        poster: poster2
    },

    {
        id: 4,
        title: "Ocean11",
        year: "2001",
        rating: 1,
        description: `Danny Ocean likes his chances. All he asks is that his handpicked squad of 10 grifters and cons play the game like they have nothing to lose.
         If all goes right, the payoff will be a fat $150 million. Divided by 11. You do the math.`,
        poster: poster3
    },
]