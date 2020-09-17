##########
# Players
##########
# player - instance of class
# properties
# name
# bankroll
# hand = []

class Player
    attr_accessor :name, :bankroll, :hand
    def initialize name, bankroll
        @name = name
        @bankroll = bankroll
        @hand = []
    end
    # method to sum the player's 2 given cards
end

# player = Player.new "maha", 100
# p player

# computer = Player.new "computer", 10000
# p computer

##########
# Card
##########
class Card
    attr_reader :value
    def initialize value
        @value = value
    end
end

#############
# Pseudo Code
############
# the game is a class

    # start_game method
    # players can choose their names
    # prompt user for players name
    # build deck
    # shuffle deck

    # loop starts
    # deal pc's hand
    # deal player's hand

    # sum player's cards - 'here's your total'
    # (bonus) -> ask player to hit or stay

    # check_win
        # sum pc cards

    # end_game
        # if players wins -> 'you win!'
            # take 10$ from pc
            # give player 10$
        # elsif -> pc wins -> 'you lose!' 
            # take 10$ from player
            # give pc 10$
        # else
            # -> 'it's a tie!'

    # prompt user (d)eal or (q)uit
        # (loop)

############
# Game Class
############
class Game
    attr_accessor :name
    def initialize name
        @name = name
        @deck = []
    end
    # start the game method
    def game_start
        puts "Welcome to Blackjack! Please enter your name: "
        # prompt user for players name
        player_name = gets.chomp
        puts "hi, #{player_name}! the game started now. happy gaming! "
        player_name
    end

    # building the deck
    def build_deck 
        # loop that prints 13 cards and uses push method to push the cards to the deck. it iterate 4 times to create the full deck.       
        4.times do
            i = 2
        10.times do 
            card = Card.new i
                # p card
                if i == 10
                    3.times do 
                        card = Card.new i
                        # p card
                        @deck.push(card)
                    end
                end
                i += 1
                @deck.push(card)
            end
        end
        # shuffle the deck and return it 
        @deck.shuffle
    end
end

blackjack = Game.new "blackjack"


#################
#Game Start Here#
################
player = blackjack.game_start
game_deck = blackjack.build_deck


new_player = Player.new player, 100
new_computer = Player.new "computer", 10000

# p new_player
# p computer



#################
#loop start here#
#################

#loop do
    # deal 2 cards to player and computer
    # p game_deck
    first_2 = game_deck.pop(2)
    p "this is first_2 #{first_2}"

    second_2 = game_deck.pop(2)
    p "this is second_2 #{second_2}"
    # p game_deck

    new_player_hand = new_player.hand.append(first_2)
    p "here are your cards #{first_2}"

    new_computer_hand = new_computer.hand.append(second_2)
    p "computer's cards #{second_2}"
# end
