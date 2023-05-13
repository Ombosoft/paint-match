export const colorTable = [
    {name: "yellow", cmyk: [0, 0, 100, 0], tolerance: 4}, // level=2, complexity=2
    {name: "aqua", cmyk: [100, 0, 0, 0], tolerance: 4}, // level=3, complexity=2
    {name: "magenta", cmyk: [0, 100, 0, 0], tolerance: 4}, // level=4, complexity=2
    {name: "black", cmyk: [0, 0, 0, 100], tolerance: 4}, // level=1, complexity=2
    {name: "gray", cmyk: [0, 0, 0, 50], tolerance: 4}, // level=5, complexity=4
    {name: "red", cmyk: [0, 100, 100, 0], tolerance: 4}, // level=6, complexity=4
    {name: "lime", cmyk: [100, 0, 100, 0], tolerance: 4}, // level=7, complexity=4
    {name: "blue", cmyk: [100, 100, 0, 0], tolerance: 4}, // level=8, complexity=4
    {name: "light gray", cmyk: [0, 0, 0, 33], tolerance: 4}, // level=9, complexity=6
    {name: "navy", cmyk: [100, 100, 0, 50], tolerance: 4}, // level=25, complexity=8
    {name: "orange", cmyk: [0, 50, 100, 0], tolerance: 4}, // level=10, complexity=6
    {name: "olive", cmyk: [0, 0, 100, 50], tolerance: 4}, // level=11, complexity=6
    {name: "chartreuse", cmyk: [50, 0, 100, 0], tolerance: 4}, // level=13, complexity=6
    {name: "spring green", cmyk: [100, 0, 50, 0], tolerance: 4}, // level=14, complexity=6
    {name: "teal", cmyk: [100, 0, 0, 50], tolerance: 4}, // level=15, complexity=6
    {name: "slate blue", cmyk: [100, 50, 0, 0], tolerance: 4}, // level=16, complexity=6
    {name: "medium slate blue", cmyk: [50, 100, 0, 0], tolerance: 4}, // level=17, complexity=6
    {name: "purple", cmyk: [0, 100, 0, 50], tolerance: 4}, // level=18, complexity=6
    {name: "orange red", cmyk: [0, 100, 50, 0], tolerance: 4}, // level=19, complexity=6
    {name: "maroon", cmyk: [0, 100, 100, 50], tolerance: 4}, // level=21, complexity=8
    {name: "gold", cmyk: [0, 33, 100, 0], tolerance: 4}, // level=22, complexity=8
    {name: "deep green", cmyk: [100, 0, 100, 50], tolerance: 4}, // level=23, complexity=8
    {name: "popcorn yellow", cmyk: [0, 0, 33, 0], tolerance: 4}, // level=12, complexity=6
    {name: "sea green", cmyk: [100, 0, 33, 0], tolerance: 4}, // level=24, complexity=8
    {name: "purple", cmyk: [33, 100, 0, 0], tolerance: 3}, // level=26, complexity=8
    {name: "fuchsia", cmyk: [0, 100, 33, 0], tolerance: 3}, // level=27, complexity=8
    {name: "bone", cmyk: [0, 0, 20, 0], tolerance: 5}, // level=29, complexity=10
    {name: "deep sky blue", cmyk: [100, 25, 0, 0], tolerance: 4}, // level=30, complexity=10
    {name: "nectarine", cmyk: [0, 80, 100, 0], tolerance: 3}, // level=31, complexity=12
    {name: "ralph yellow", cmyk: [0, 0, 100, 20], tolerance: 4}, // level=32, complexity=12
    {name: "light teal", cmyk: [100, 0, 20, 0], tolerance: 5}, // level=34, complexity=12
    {name: "cyanish", cmyk: [100, 0, 0, 20], tolerance: 4}, // level=35, complexity=12
    {name: "grape", cmyk: [20, 100, 0, 0], tolerance: 5}, // level=38, complexity=12
    {name: "cornflower", cmyk: [80, 100, 0, 0], tolerance: 1}, // level=37, complexity=12
    {name: "dark cherry red", cmyk: [0, 100, 100, 80], tolerance: 3}, // level=42, complexity=14
    {name: "dark magenta", cmyk: [0, 100, 0, 20], tolerance: 4}, // level=39, complexity=12
    {name: "periwinkle", cmyk: [33, 33, 0, 0], tolerance: 4}, // level=36, complexity=12
    {name: "rose", cmyk: [0, 100, 20, 0], tolerance: 3}, // level=40, complexity=12
    {name: "red", cmyk: [0, 100, 100, 20], tolerance: 4}, // level=43, complexity=14
    {name: "orange", cmyk: [0, 60, 100, 0], tolerance: 4}, // level=44, complexity=14
    {name: "green", cmyk: [100, 0, 100, 20], tolerance: 4}, // level=47, complexity=14
    {name: "yolk", cmyk: [0, 10, 100, 0], tolerance: 4}, // level=45, complexity=14
    {name: "pine green", cmyk: [100, 0, 100, 80], tolerance: 3}, // level=46, complexity=14
    {name: "pale turquoise", cmyk: [27, 0, 0, 0], tolerance: 4, winTolerance: 0.8}, // level=68, complexity=15
    {name: "midnight blue", cmyk: [100, 100, 0, 80], tolerance: 4}, // level=50, complexity=14
    {name: "neon avocado", cmyk: [100, 0, 60, 0], tolerance: 5}, // level=48, complexity=14
    {name: "medium blue", cmyk: [100, 100, 0, 20], tolerance: 4}, // level=51, complexity=14
    {name: "true purple", cmyk: [0, 100, 0, 40], tolerance: 4}, // level=53, complexity=14
    {name: "broadway pink", cmyk: [0, 100, 60, 0], tolerance: 4}, // level=54, complexity=14
    {name: "gainsboro", cmyk: [0, 0, 0, 14], tolerance: 4}, // level=58, complexity=15
    {name: "blood red", cmyk: [0, 100, 100, 60], tolerance: 1}, // level=74, complexity=16
    {name: "dark orange", cmyk: [0, 45, 100, 0], tolerance: 5}, // level=60, complexity=15
    {name: "orange", cmyk: [0, 35, 100, 0], tolerance: 4}, // level=61, complexity=15
    {name: "papaya", cmyk: [0, 0, 51, 0], tolerance: 4, winTolerance: 0.3}, // level=63, complexity=15
    {name: "light yellow", cmyk: [0, 0, 12, 0], tolerance: 5}, // level=64, complexity=15
    {name: "dark cyan", cmyk: [100, 0, 0, 45], tolerance: 4}, // level=66, complexity=15
    {name: "light blue", cmyk: [41, 0, 0, 0], tolerance: 4, winTolerance: 0.7}, // level=67, complexity=15
    {name: "light cyan", cmyk: [12, 0, 0, 0], tolerance: 4}, // level=69, complexity=15
    {name: "dark magenta", cmyk: [0, 100, 0, 45], tolerance: 4}, // level=71, complexity=15
    {name: "plum", cmyk: [0, 27, 0, 0], tolerance: 4}, // level=72, complexity=15
    {name: "thistle", cmyk: [0, 12, 0, 0], tolerance: 4}, // level=73, complexity=15
    {name: "dark orange", cmyk: [0, 50, 100, 20], tolerance: 4}, // level=76, complexity=16
    {name: "dirty green", cmyk: [0, 0, 100, 45], tolerance: 4}, // level=62, complexity=15
    {name: "chartreuse", cmyk: [50, 0, 100, 20], tolerance: 4}, // level=77, complexity=16
    {name: "irish flag", cmyk: [100, 0, 100, 40], tolerance: 4}, // level=78, complexity=16
    {name: "spring green", cmyk: [100, 0, 50, 20], tolerance: 5}, // level=79, complexity=16
    {name: "dark red", cmyk: [0, 100, 100, 45], tolerance: 2}, // level=80, complexity=17
    {name: "dark orange", cmyk: [0, 47, 100, 0], tolerance: 3}, // level=83, complexity=17
    {name: "gold", cmyk: [0, 16, 100, 0], tolerance: 4}, // level=84, complexity=17
    {name: "yellow", cmyk: [0, 0, 100, 7], tolerance: 4}, // level=85, complexity=17
    {name: "dark green", cmyk: [100, 0, 100, 45], tolerance: 4}, // level=86, complexity=17
    {name: "orange red", cmyk: [0, 73, 100, 0], tolerance: 1}, // level=82, complexity=17
    {name: "cyan", cmyk: [100, 0, 0, 7], tolerance: 4}, // level=87, complexity=17
    {name: "cichlid", cmyk: [100, 76, 0, 0], tolerance: 2}, // level=89, complexity=17
    {name: "dark blue", cmyk: [100, 100, 0, 45], tolerance: 5, winTolerance: 0.5}, // level=90, complexity=17
    {name: "magenta", cmyk: [0, 100, 0, 7], tolerance: 5}, // level=91, complexity=17
    {name: "lavender", cmyk: [0, 25, 0, 20], tolerance: 4}, // level=93, complexity=18
    {name: "brown", cmyk: [0, 50, 100, 45], tolerance: 2}, // level=99, complexity=19
    {name: "orange red", cmyk: [0, 75, 75, 0], tolerance: 5}, // level=75, complexity=16
    {name: "pink", cmyk: [0, 25, 20, 0], tolerance: 5}, // level=94, complexity=18
    {name: "red", cmyk: [0, 100, 100, 7], tolerance: 4}, // level=95, complexity=19
    {name: "aqua", cmyk: [50, 0, 0, 20], tolerance: 4, winTolerance: 0.5}, // level=49, complexity=14
    {name: "coral", cmyk: [0, 55, 66, 0], tolerance: 3}, // level=96, complexity=19
    {name: "warm gray", cmyk: [0, 0, 18, 50], tolerance: 4}, // level=100, complexity=19
    {name: "starbucks", cmyk: [100, 0, 50, 60], tolerance: 4}, // level=92, complexity=18
    {name: "coral", cmyk: [0, 50, 69, 0], tolerance: 4}, // level=97, complexity=19
    {name: "chartreuse", cmyk: [50, 0, 100, 45], tolerance: 4}, // level=101, complexity=19
    {name: "dumpster", cmyk: [100, 0, 100, 69], tolerance: 4}, // level=102, complexity=19
    {name: "dark green", cmyk: [100, 0, 100, 61], tolerance: 4}, // level=103, complexity=19
    {name: "midnight blue", cmyk: [100, 100, 0, 39], tolerance: 4}, // level=107, complexity=19
    {name: "green", cmyk: [100, 0, 100, 7], tolerance: 4}, // level=104, complexity=19
    {name: "blue", cmyk: [100, 100, 0, 7], tolerance: 4}, // level=108, complexity=19
    {name: "springgreen", cmyk: [100, 0, 50, 45], tolerance: 4}, // level=105, complexity=19
    {name: "aquamarine", cmyk: [50, 0, 17, 0], tolerance: 4}, // level=106, complexity=19
    {name: "novascotia salmon", cmyk: [0, 80, 80, 0], tolerance: 4}, // level=109, complexity=20
    {name: "cinnamon", cmyk: [0, 40, 100, 33], tolerance: 4}, // level=111, complexity=20
    {name: "flat pink", cmyk: [0, 20, 20, 0], tolerance: 4}, // level=110, complexity=20
    {name: "parrot green", cmyk: [80, 0, 80, 0], tolerance: 4}, // level=112, complexity=20
    {name: "deep sky blue", cmyk: [100, 25, 0, 20], tolerance: 4}, // level=114, complexity=20
    {name: "offwhite green", cmyk: [20, 0, 20, 0], tolerance: 4}, // level=113, complexity=20
    {name: "royal blue", cmyk: [80, 80, 0, 0], tolerance: 4}, // level=115, complexity=20
    {name: "flesh ochre", cmyk: [0, 66, 87, 0], tolerance: 4}, // level=117, complexity=21
    {name: "offwhite blue", cmyk: [20, 20, 0, 0], tolerance: 4}, // level=116, complexity=20
    {name: "dark orange", cmyk: [0, 50, 100, 7], tolerance: 4}, // level=118, complexity=21
    {name: "chartreuse", cmyk: [50, 0, 100, 7], tolerance: 4}, // level=119, complexity=21
    {name: "spring green", cmyk: [100, 0, 50, 7], tolerance: 4}, // level=120, complexity=21
    {name: "medium purple", cmyk: [33, 49, 0, 0], tolerance: 4}, // level=121, complexity=21
    {name: "pale violet red", cmyk: [0, 49, 33, 0], tolerance: 4}, // level=122, complexity=21
    {name: "sand", cmyk: [0, 20, 40, 0], tolerance: 4}, // level=123, complexity=22
    {name: "fog", cmyk: [0, 0, 10, 20], tolerance: 4}, // level=124, complexity=22
    {name: "maroon", cmyk: [0, 80, 30, 0], tolerance: 4}, // level=125, complexity=22
    {name: "orange", cmyk: [0, 51, 75, 0], tolerance: 4}, // level=126, complexity=23
    {name: "olive drab", cmyk: [25, 0, 76, 0], tolerance: 4}, // level=127, complexity=23
    {name: "deep sky blue", cmyk: [100, 25, 0, 45], tolerance: 4}, // level=128, complexity=23
    {name: "seattle salmon", cmyk: [0, 60, 60, 0], tolerance: 4}, // level=132, complexity=24
    {name: "light blue", cmyk: [25, 6, 0, 0], tolerance: 4}, // level=129, complexity=23
    {name: "violet flower", cmyk: [25, 63, 0, 0], tolerance: 4}, // level=130, complexity=23
    {name: "dark orchid", cmyk: [25, 76, 0, 0], tolerance: 4}, // level=131, complexity=23
    {name: "wasabi", cmyk: [60, 0, 60, 0], tolerance: 4}, // level=133, complexity=24
    {name: "safety cone", cmyk: [0, 67, 80, 0], tolerance: 4}, // level=137, complexity=25
    {name: "pale green", cmyk: [40, 0, 40, 0], tolerance: 4}, // level=134, complexity=24
    {name: "neon blue", cmyk: [70, 70, 0, 0], tolerance: 4}, // level=135, complexity=24
    {name: "cobalt", cmyk: [60, 60, 0, 0], tolerance: 4}, // level=136, complexity=24
    {name: "blanched almond", cmyk: [0, 8, 20, 0], tolerance: 4}, // level=138, complexity=25
    {name: "orange", cmyk: [0, 35, 100, 20], tolerance: 4}, // level=139, complexity=25
    {name: "lemon chiffon", cmyk: [0, 2, 20, 0], tolerance: 4}, // level=141, complexity=25
    {name: "mustard", cmyk: [0, 20, 93, 0], tolerance: 4}, // level=140, complexity=25
    {name: "ivory", cmyk: [0, 0, 6, 20], tolerance: 4}, // level=142, complexity=25
    {name: "azure", cmyk: [6, 0, 0, 20], tolerance: 4}, // level=144, complexity=25
    {name: "thistle", cmyk: [0, 12, 0, 20], tolerance: 4}, // level=149, complexity=25
    {name: "light cyan", cmyk: [12, 0, 0, 20], tolerance: 4}, // level=145, complexity=25
    {name: "pale turquoise", cmyk: [27, 0, 0, 20], tolerance: 4}, // level=146, complexity=25
    {name: "plum", cmyk: [0, 27, 0, 20], tolerance: 4}, // level=150, complexity=25
    {name: "dark slate gray", cmyk: [41, 0, 0, 20], tolerance: 4}, // level=147, complexity=25
    {name: "brown", cmyk: [0, 75, 75, 20], tolerance: 4}, // level=151, complexity=26
    {name: "deep sky blue", cmyk: [100, 25, 0, 7], tolerance: 4}, // level=148, complexity=25
    {name: "yellow green", cmyk: [25, 0, 75, 20], tolerance: 4}, // level=152, complexity=26
    {name: "medium aquamarine", cmyk: [75, 0, 25, 20], tolerance: 4}, // level=153, complexity=26
    {name: "sky blue", cmyk: [75, 25, 0, 20], tolerance: 4}, // level=154, complexity=26
    {name: "violet red", cmyk: [0, 75, 25, 20], tolerance: 4}, // level=157, complexity=26
    {name: "medium blue", cmyk: [75, 75, 0, 20], tolerance: 4}, // level=155, complexity=26
    {name: "dark orchid", cmyk: [25, 75, 0, 20], tolerance: 4}, // level=156, complexity=26
    {name: "blood orange", cmyk: [0, 92, 100, 20], tolerance: 4}, // level=158, complexity=27
    {name: "peach", cmyk: [0, 40, 67, 0], tolerance: 4}, // level=160, complexity=27
    {name: "orange red", cmyk: [0, 73, 100, 20], tolerance: 4}, // level=159, complexity=27
    {name: "cadmium yellow", cmyk: [0, 40, 93, 0], tolerance: 4}, // level=161, complexity=27
    {name: "cadet blue", cmyk: [40, 0, 0, 38], tolerance: 4}, // level=166, complexity=27
    {name: "honey", cmyk: [0, 10, 32, 0], tolerance: 4}, // level=162, complexity=27
    {name: "cadet blue", cmyk: [40, 4, 0, 0], tolerance: 4}, // level=168, complexity=27
    {name: "gold", cmyk: [0, 16, 100, 20], tolerance: 4}, // level=163, complexity=27
    {name: "khaki", cmyk: [0, 0, 40, 38], tolerance: 4}, // level=164, complexity=27
    {name: "beige", cmyk: [0, 0, 10, 4], tolerance: 4}, // level=165, complexity=27
    {name: "turquoise", cmyk: [100, 4, 0, 20], tolerance: 4}, // level=167, complexity=27
    {name: "medium orchid", cmyk: [12, 60, 0, 0], tolerance: 4}, // level=172, complexity=27
    {name: "neon blue", cmyk: [60, 22, 0, 0], tolerance: 4}, // level=169, complexity=27
    {name: "denim", cmyk: [61, 33, 0, 33], tolerance: 4}, // level=170, complexity=27
    {name: "greenish umber", cmyk: [0, 76, 95, 0], tolerance: 4}, // level=174, complexity=28
    {name: "blue bird", cmyk: [57, 33, 0, 33], tolerance: 4}, // level=171, complexity=27
    {name: "blue violet", cmyk: [0, 40, 0, 38], tolerance: 4}, // level=173, complexity=27
    {name: "salmon", cmyk: [0, 45, 59, 0], tolerance: 4}, // level=175, complexity=28
    {name: "tangerine", cmyk: [0, 55, 91, 0], tolerance: 4}, // level=176, complexity=28
    {name: "peach puff", cmyk: [0, 15, 27, 0], tolerance: 4}, // level=177, complexity=28
    {name: "ivory", cmyk: [0, 0, 6, 45], tolerance: 4}, // level=182, complexity=28
    {name: "tan", cmyk: [0, 35, 69, 0], tolerance: 4}, // level=178, complexity=28
    {name: "orange", cmyk: [0, 35, 100, 45], tolerance: 4}, // level=179, complexity=28
    {name: "wheat", cmyk: [0, 0, 12, 15], tolerance: 4}, // level=184, complexity=28
    {name: "goldenrod", cmyk: [0, 24, 85, 0], tolerance: 4}, // level=180, complexity=28
    {name: "melon rind green", cmyk: [13, 0, 35, 0], tolerance: 4}, // level=186, complexity=28
    {name: "light goldenrod", cmyk: [0, 7, 45, 0], tolerance: 4}, // level=181, complexity=28
    {name: "light yellow", cmyk: [0, 0, 12, 45], tolerance: 4}, // level=183, complexity=28
    {name: "azure", cmyk: [6, 0, 0, 45], tolerance: 4}, // level=187, complexity=28
    {name: "bright gold", cmyk: [0, 0, 88, 15], tolerance: 4}, // level=185, complexity=28
    {name: "light cyan", cmyk: [12, 0, 0, 45], tolerance: 4}, // level=188, complexity=28
    {name: "pale turquoise", cmyk: [27, 0, 0, 45], tolerance: 4}, // level=189, complexity=28
    {name: "thistle", cmyk: [0, 12, 0, 15], tolerance: 4}, // level=195, complexity=28
    {name: "light blue", cmyk: [12, 0, 0, 15], tolerance: 4}, // level=190, complexity=28
    {name: "dark slate gray", cmyk: [41, 0, 0, 45], tolerance: 4}, // level=191, complexity=28
    {name: "light blue", cmyk: [34, 0, 0, 15], tolerance: 4}, // level=192, complexity=28
    {name: "thistle", cmyk: [0, 12, 0, 45], tolerance: 4}, // level=193, complexity=28
    {name: "plum", cmyk: [0, 27, 0, 45], tolerance: 4}, // level=194, complexity=28
    {name: "corfu pink", cmyk: [0, 15, 0, 7], tolerance: 4}, // level=196, complexity=28
    {name: "violet", cmyk: [0, 45, 0, 7], tolerance: 4}, // level=197, complexity=28
    {name: "cadmium red light", cmyk: [0, 99, 95, 0], tolerance: 4}, // level=198, complexity=28
    {name: "brown", cmyk: [0, 75, 75, 35], tolerance: 4}, // level=199, complexity=29
    {name: "chrome oxide green", cmyk: [20, 0, 84, 50], tolerance: 4}, // level=203, complexity=29
    {name: "chocolate", cmyk: [0, 67, 100, 40], tolerance: 4}, // level=201, complexity=29
    {name: "brown", cmyk: [0, 75, 75, 45], tolerance: 4}, // level=200, complexity=29
    {name: "medium aquamarine", cmyk: [50, 0, 17, 20], tolerance: 4}, // level=204, complexity=29
    {name: "chocolate", cmyk: [0, 50, 86, 20], tolerance: 4}, // level=202, complexity=29
    {name: "turquoise blue", cmyk: [100, 0, 30, 22], tolerance: 4}, // level=205, complexity=29
    {name: "dark violet", cmyk: [30, 100, 0, 17], tolerance: 4}, // level=206, complexity=29
    {name: "fire brick", cmyk: [0, 81, 81, 0], tolerance: 4}, // level=207, complexity=30
    {name: "rosy brown", cmyk: [0, 24, 24, 0], tolerance: 4}, // level=209, complexity=30
    {name: "indian red", cmyk: [0, 58, 58, 0], tolerance: 4}, // level=208, complexity=30
    {name: "misty rose", cmyk: [0, 11, 12, 0], tolerance: 4}, // level=211, complexity=30
    {name: "brown", cmyk: [0, 73, 100, 45], tolerance: 4}, // level=213, complexity=30
    {name: "tomato", cmyk: [0, 61, 72, 0], tolerance: 4}, // level=212, complexity=30
    {name: "light salmon", cmyk: [0, 37, 52, 0], tolerance: 4}, // level=214, complexity=30
    {name: "bisque", cmyk: [0, 11, 23, 0], tolerance: 4}, // level=220, complexity=30
    {name: "sienna", cmyk: [0, 49, 72, 0], tolerance: 4}, // level=215, complexity=30
    {name: "cadmium orange", cmyk: [0, 62, 99, 0], tolerance: 4}, // level=216, complexity=30
    {name: "seashell", cmyk: [0, 4, 7, 0], tolerance: 4}, // level=218, complexity=30
    {name: "oregon salmon", cmyk: [0, 53, 87, 0], tolerance: 4}, // level=217, complexity=30
    {name: "desert sand", cmyk: [0, 9, 16, 0], tolerance: 4}, // level=219, complexity=30
    {name: "burly wood", cmyk: [0, 17, 39, 0], tolerance: 4}, // level=222, complexity=30
    {name: "antique white", cmyk: [0, 6, 14, 0], tolerance: 4}, // level=221, complexity=30
    {name: "aureoline yellow", cmyk: [0, 34, 86, 0], tolerance: 4}, // level=223, complexity=30
    {name: "cheddar", cmyk: [0, 23, 59, 0], tolerance: 4}, // level=224, complexity=30
    {name: "navajo white", cmyk: [0, 13, 32, 0], tolerance: 4}, // level=225, complexity=30
    {name: "papaya whip", cmyk: [0, 6, 16, 0], tolerance: 4}, // level=226, complexity=30
    {name: "naples yellow deep", cmyk: [0, 34, 93, 0], tolerance: 4}, // level=227, complexity=30
    {name: "moccasin", cmyk: [0, 11, 29, 0], tolerance: 4}, // level=228, complexity=30
    {name: "orange", cmyk: [0, 35, 100, 7], tolerance: 4}, // level=229, complexity=30
    {name: "wheat", cmyk: [0, 9, 27, 0], tolerance: 4}, // level=230, complexity=30
    {name: "cadmium yellow light", cmyk: [0, 31, 94, 0], tolerance: 4}, // level=231, complexity=30
    {name: "floral white", cmyk: [0, 2, 6, 0], tolerance: 4}, // level=232, complexity=30
    {name: "dark goldenrod", cmyk: [0, 27, 94, 0], tolerance: 4}, // level=233, complexity=30
    {name: "corn silk", cmyk: [0, 3, 14, 0], tolerance: 4}, // level=235, complexity=30
    {name: "cadmium lemon", cmyk: [0, 11, 99, 0], tolerance: 4}, // level=238, complexity=30
    {name: "buttermilk", cmyk: [0, 5, 29, 0], tolerance: 4}, // level=236, complexity=30
    {name: "gold", cmyk: [0, 16, 100, 45], tolerance: 4}, // level=237, complexity=30
    {name: "coconut", cmyk: [0, 1, 19, 0], tolerance: 4}, // level=240, complexity=30
    {name: "dark olive green", cmyk: [0, 0, 41, 69], tolerance: 4}, // level=242, complexity=30
    {name: "ivory", cmyk: [0, 0, 6, 7], tolerance: 4}, // level=243, complexity=30
    {name: "gane green", cmyk: [0, 0, 57, 53], tolerance: 4}, // level=244, complexity=30
    {name: "light yellow", cmyk: [0, 0, 12, 7], tolerance: 4}, // level=246, complexity=30
    {name: "medium goldenrod", cmyk: [0, 0, 26, 8], tolerance: 4}, // level=247, complexity=30
    {name: "goldenrod", cmyk: [0, 0, 49, 14], tolerance: 4}, // level=248, complexity=30
    {name: "light goldenrod yellow", cmyk: [0, 0, 16, 2], tolerance: 4}, // level=249, complexity=30
    {name: "dark olive green", cmyk: [21, 0, 56, 0], tolerance: 4}, // level=251, complexity=30
    {name: "honeydew", cmyk: [6, 0, 6, 0], tolerance: 4}, // level=254, complexity=30
    {name: "green yellow", cmyk: [32, 0, 82, 0], tolerance: 4}, // level=252, complexity=30
    {name: "dark sea green", cmyk: [24, 0, 24, 0], tolerance: 4}, // level=253, complexity=30
    {name: "viridian light", cmyk: [57, 0, 56, 0], tolerance: 4}, // level=255, complexity=30
    {name: "sea green", cmyk: [67, 0, 38, 0], tolerance: 4}, // level=256, complexity=30
    {name: "mint cream", cmyk: [4, 0, 2, 0], tolerance: 4}, // level=257, complexity=30
    {name: "mint blue", cmyk: [14, 0, 2, 0], tolerance: 4}, // level=258, complexity=30
    {name: "cool mint", cmyk: [43, 0, 1, 0], tolerance: 4}, // level=259, complexity=30
    {name: "dark slate gray", cmyk: [41, 0, 0, 69], tolerance: 4}, // level=260, complexity=30
    {name: "teal", cmyk: [61, 0, 0, 44], tolerance: 4}, // level=262, complexity=30
    {name: "light cyan", cmyk: [12, 0, 0, 7], tolerance: 4}, // level=263, complexity=30
    {name: "indigo", cmyk: [98, 9, 0, 0], tolerance: 4}, // level=272, complexity=30
    {name: "turquoise", cmyk: [26, 0, 0, 8], tolerance: 4}, // level=264, complexity=30
    {name: "medium turquoise", cmyk: [49, 0, 0, 14], tolerance: 4}, // level=265, complexity=30
    {name: "pale turquoise", cmyk: [27, 0, 0, 7], tolerance: 4}, // level=266, complexity=30
    {name: "metallic mint", cmyk: [78, 0, 0, 1], tolerance: 4}, // level=269, complexity=30
    {name: "turquoise", cmyk: [100, 4, 0, 45], tolerance: 4}, // level=270, complexity=30
    {name: "teal LED", cmyk: [98, 7, 0, 0], tolerance: 4}, // level=271, complexity=30
    {name: "police strobe", cmyk: [96, 29, 0, 0], tolerance: 4}, // level=273, complexity=30
    {name: "light sky blue", cmyk: [31, 11, 0, 0], tolerance: 4}, // level=274, complexity=30
    {name: "sky blue", cmyk: [47, 19, 0, 0], tolerance: 4}, // level=275, complexity=30
    {name: "steel blue", cmyk: [61, 28, 0, 0], tolerance: 4}, // level=276, complexity=30
    {name: "la maison bleue", cmyk: [62, 31, 0, 0], tolerance: 4}, // level=278, complexity=30
    {name: "dodger blue", cmyk: [88, 44, 0, 0], tolerance: 4}, // level=279, complexity=30
    {name: "slate gray", cmyk: [22, 11, 0, 0], tolerance: 4}, // level=280, complexity=30
    {name: "forget me nots", cmyk: [51, 29, 0, 0], tolerance: 4}, // level=281, complexity=30
    {name: "light steel blue", cmyk: [21, 12, 0, 0], tolerance: 4}, // level=282, complexity=30
    {name: "royal blue", cmyk: [72, 54, 0, 0], tolerance: 4}, // level=283, complexity=30
    {name: "stained glass", cmyk: [82, 78, 0, 0], tolerance: 4}, // level=284, complexity=30
    {name: "slate blue", cmyk: [49, 56, 0, 0], tolerance: 4}, // level=286, complexity=30
    {name: "purple", cmyk: [39, 81, 0, 0], tolerance: 4}, // level=288, complexity=30
    {name: "violet", cmyk: [0, 41, 0, 69], tolerance: 4}, // level=290, complexity=30
    {name: "beet", cmyk: [0, 61, 0, 44], tolerance: 4}, // level=291, complexity=30
    {name: "thistle", cmyk: [0, 12, 0, 7], tolerance: 4}, // level=292, complexity=30
    {name: "plum", cmyk: [0, 28, 0, 13], tolerance: 4}, // level=293, complexity=30
    {name: "orchid", cmyk: [0, 49, 0, 14], tolerance: 4}, // level=295, complexity=30
    {name: "plum", cmyk: [0, 27, 0, 7], tolerance: 4}, // level=296, complexity=30
    {name: "orchid", cmyk: [0, 49, 2, 0], tolerance: 4}, // level=297, complexity=30
    {name: "spicy pink", cmyk: [0, 89, 32, 0], tolerance: 4}, // level=298, complexity=30
    {name: "neon pink", cmyk: [0, 57, 22, 0], tolerance: 4}, // level=299, complexity=30
    {name: "deep pink", cmyk: [0, 92, 42, 0], tolerance: 4}, // level=300, complexity=30
    {name: "hot pink", cmyk: [0, 59, 29, 0], tolerance: 4}, // level=301, complexity=30
    {name: "violet red", cmyk: [0, 76, 41, 0], tolerance: 4}, // level=303, complexity=30
    {name: "bubble gum", cmyk: [0, 43, 27, 0], tolerance: 4}, // level=304, complexity=30
    {name: "pink", cmyk: [0, 29, 23, 0], tolerance: 4}, // level=306, complexity=30
    {name: "peach puff", cmyk: [0, 32, 27, 0], tolerance: 4}, // level=307, complexity=30
    {name: "fire brick", cmyk: [0, 75, 75, 44], tolerance: 4}, // level=309, complexity=31
    {name: "brown", cmyk: [0, 75, 75, 7], tolerance: 4}, // level=310, complexity=31
    {name: "coral", cmyk: [0, 56, 66, 20], tolerance: 4}, // level=311, complexity=31
    {name: "sienna", cmyk: [0, 25, 75, 44], tolerance: 4}, // level=312, complexity=31
    {name: "iceberg lettuce", cmyk: [10, 0, 50, 11], tolerance: 4}, // level=313, complexity=31
    {name: "olive drab", cmyk: [25, 0, 75, 44], tolerance: 4}, // level=314, complexity=31
    {name: "steel blue", cmyk: [75, 25, 0, 44], tolerance: 4}, // level=315, complexity=31
    {name: "navy blue", cmyk: [75, 75, 0, 44], tolerance: 4}, // level=316, complexity=31
    {name: "medium purple", cmyk: [33, 49, 0, 20], tolerance: 4}, // level=317, complexity=31
    {name: "indigo tile", cmyk: [10, 31, 0, 50], tolerance: 4}, // level=318, complexity=31
    {name: "dark slate blue", cmyk: [25, 75, 0, 44], tolerance: 4}, // level=319, complexity=31
    {name: "maroon", cmyk: [0, 75, 25, 44], tolerance: 4}, // level=320, complexity=31
    {name: "pale violet red", cmyk: [0, 49, 33, 20], tolerance: 4}, // level=321, complexity=31
    {name: "gummi red", cmyk: [0, 92, 100, 1], tolerance: 4}, // level=322, complexity=32
    {name: "coral", cmyk: [0, 55, 66, 45], tolerance: 4}, // level=323, complexity=32
    {name: "orange red", cmyk: [0, 73, 100, 7], tolerance: 4}, // level=324, complexity=32
    {name: "saddle brown", cmyk: [0, 50, 86, 45], tolerance: 4}, // level=325, complexity=32
    {name: "cinnamon", cmyk: [0, 49, 100, 52], tolerance: 4}, // level=326, complexity=32
    {name: "sign orange", cmyk: [0, 47, 100, 13], tolerance: 4}, // level=327, complexity=32
    {name: "cappuccino", cmyk: [0, 25, 60, 30], tolerance: 4}, // level=328, complexity=32
    {name: "gold", cmyk: [0, 16, 100, 7], tolerance: 4}, // level=329, complexity=32
    {name: "gold green", cmyk: [23, 0, 100, 13], tolerance: 4}, // level=330, complexity=32
    {name: "lawn green", cmyk: [51, 0, 100, 1], tolerance: 4}, // level=331, complexity=32
    {name: "celtics", cmyk: [100, 0, 71, 62], tolerance: 4}, // level=332, complexity=32
    {name: "true green", cmyk: [100, 0, 71, 31], tolerance: 4}, // level=333, complexity=32
    {name: "emerald green", cmyk: [100, 0, 57, 21], tolerance: 4}, // level=334, complexity=32
    {name: "medium spring green", cmyk: [100, 0, 38, 2], tolerance: 4}, // level=335, complexity=32
    {name: "aquamarine", cmyk: [50, 0, 17, 45], tolerance: 4}, // level=336, complexity=32
    {name: "sign green", cmyk: [100, 0, 21, 58], tolerance: 4}, // level=337, complexity=32
    {name: "green copper", cmyk: [35, 0, 7, 50], tolerance: 4}, // level=338, complexity=32
    {name: "dark turquoise", cmyk: [100, 1, 0, 18], tolerance: 4}, // level=339, complexity=32
    {name: "turquoise", cmyk: [100, 4, 0, 7], tolerance: 4}, // level=340, complexity=32
    {name: "topaz", cmyk: [100, 32, 0, 12], tolerance: 4}, // level=341, complexity=32
    {name: "sign blue", cmyk: [100, 53, 0, 47], tolerance: 4}, // level=342, complexity=32
    {name: "pollock blue", cmyk: [55, 35, 0, 33], tolerance: 4}, // level=343, complexity=32
    {name: "ty nant", cmyk: [100, 72, 0, 2], tolerance: 4}, // level=344, complexity=32
    {name: "indigo", cmyk: [42, 100, 0, 49], tolerance: 4}, // level=345, complexity=32
    {name: "maroon", cmyk: [0, 80, 30, 20], tolerance: 4}, // level=346, complexity=32
    {name: "strawberry", cmyk: [0, 80, 81, 25], tolerance: 4}, // level=347, complexity=33
    {name: "gold", cmyk: [0, 38, 75, 20], tolerance: 4}, // level=348, complexity=33
    {name: "yellow green", cmyk: [25, 0, 76, 20], tolerance: 4}, // level=349, complexity=33
    {name: "pea", cmyk: [30, 0, 59, 33], tolerance: 4}, // level=350, complexity=33
    {name: "mint green", cmyk: [25, 0, 20, 1], tolerance: 4}, // level=351, complexity=33
    {name: "medium seag reen", cmyk: [66, 0, 37, 30], tolerance: 4}, // level=352, complexity=33
    {name: "peacock", cmyk: [75, 20, 0, 21], tolerance: 4}, // level=356, complexity=33
    {name: "medium aquamarine", cmyk: [76, 0, 25, 20], tolerance: 4}, // level=353, complexity=33
    {name: "wavecrest", cmyk: [25, 0, 2, 20], tolerance: 4}, // level=354, complexity=33
    {name: "dark orchid", cmyk: [25, 76, 0, 20], tolerance: 4}, // level=357, complexity=33
    {name: "concord grape", cmyk: [33, 99, 0, 40], tolerance: 4}, // level=358, complexity=33
    {name: "brown", cmyk: [0, 67, 67, 50], tolerance: 4}, // level=359, complexity=34
    {name: "coral", cmyk: [0, 55, 66, 7], tolerance: 4}, // level=360, complexity=34
    {name: "dark wood", cmyk: [0, 29, 50, 48], tolerance: 4}, // level=361, complexity=34
    {name: "chocolate", cmyk: [0, 50, 86, 18], tolerance: 4}, // level=362, complexity=34
    {name: "wet moss", cmyk: [26, 0, 50, 68], tolerance: 4}, // level=365, complexity=34
    {name: "aquamarine", cmyk: [50, 0, 17, 7], tolerance: 4}, // level=369, complexity=34
    {name: "chocolate", cmyk: [0, 50, 86, 7], tolerance: 4}, // level=363, complexity=34
    {name: "sap green", cmyk: [63, 0, 84, 50], tolerance: 4}, // level=367, complexity=34
    {name: "new tan", cmyk: [0, 15, 33, 8], tolerance: 4}, // level=364, complexity=34
    {name: "palm", cmyk: [27, 0, 50, 49], tolerance: 4}, // level=366, complexity=34
    {name: "pale green", cmyk: [40, 0, 40, 20], tolerance: 4}, // level=368, complexity=34
    {name: "malachite", cmyk: [88, 0, 13, 50], tolerance: 4}, // level=370, complexity=34
    {name: "blue whale", cmyk: [48, 21, 0, 50], tolerance: 4}, // level=371, complexity=34
    {name: "blue stone", cmyk: [50, 28, 0, 38], tolerance: 4}, // level=372, complexity=34
    {name: "medium purple", cmyk: [33, 49, 0, 45], tolerance: 4}, // level=373, complexity=34
    {name: "lemon chiffon", cmyk: [0, 2, 20, 20], tolerance: 4}, // level=376, complexity=35
    {name: "purple rain", cmyk: [23, 50, 0, 46], tolerance: 4}, // level=374, complexity=34
    {name: "pale violet red", cmyk: [0, 49, 33, 45], tolerance: 4}, // level=375, complexity=34
    {name: "night vision", cmyk: [40, 0, 45, 20], tolerance: 4}, // level=377, complexity=35
    {name: "shamrock", cmyk: [37, 0, 25, 60], tolerance: 4}, // level=378, complexity=35
    {name: "lightblue", cmyk: [25, 6, 0, 10], tolerance: 4}, // level=379, complexity=35
    {name: "smyrna purple", cmyk: [0, 40, 25, 36], tolerance: 4}, // level=380, complexity=35
    {name: "indian red", cmyk: [0, 55, 55, 20], tolerance: 4}, // level=381, complexity=36
    {name: "chili", cmyk: [0, 66, 69, 17], tolerance: 4}, // level=382, complexity=36
    {name: "tan", cmyk: [0, 33, 49, 14], tolerance: 4}, // level=383, complexity=36
    {name: "bakers chocolate", cmyk: [0, 45, 75, 64], tolerance: 4}, // level=384, complexity=36
    {name: "sandy brown", cmyk: [0, 33, 61, 4], tolerance: 4}, // level=385, complexity=36
    {name: "coffee", cmyk: [0, 51, 98, 33], tolerance: 4}, // level=386, complexity=36
    {name: "cafe au lait", cmyk: [0, 32, 66, 29], tolerance: 4}, // level=387, complexity=36
    {name: "tan", cmyk: [0, 14, 33, 18], tolerance: 4}, // level=388, complexity=36
    {name: "bronzeii", cmyk: [0, 25, 63, 35], tolerance: 4}, // level=389, complexity=36
    {name: "organic tea", cmyk: [0, 26, 79, 33], tolerance: 4}, // level=390, complexity=36
    {name: "breadfruit", cmyk: [15, 0, 75, 39], tolerance: 4}, // level=391, complexity=36
    {name: "soylent green", cmyk: [17, 0, 33, 34], tolerance: 4}, // level=392, complexity=36
    {name: "noble fir", cmyk: [33, 0, 51, 58], tolerance: 4}, // level=394, complexity=36
    {name: "green quartz", cmyk: [15, 0, 25, 36], tolerance: 4}, // level=393, complexity=36
    {name: "greenyellow", cmyk: [33, 0, 49, 14], tolerance: 4}, // level=395, complexity=36
    {name: "green moth", cmyk: [36, 0, 45, 25], tolerance: 4}, // level=396, complexity=36
    {name: "green algae", cmyk: [42, 0, 43, 33], tolerance: 4}, // level=397, complexity=36
    {name: "obsidian", cmyk: [33, 0, 26, 64], tolerance: 4}, // level=398, complexity=36
    {name: "bottle green", cmyk: [82, 0, 66, 36], tolerance: 4}, // level=399, complexity=36
    {name: "aquamarine", cmyk: [49, 0, 33, 14], tolerance: 4}, // level=400, complexity=36
    {name: "green line", cmyk: [66, 0, 43, 42], tolerance: 4}, // level=401, complexity=36
    {name: "blue fern", cmyk: [25, 0, 15, 39], tolerance: 4}, // level=402, complexity=36
    {name: "isle royale greenstone", cmyk: [33, 0, 17, 61], tolerance: 4}, // level=403, complexity=36
    {name: "aquarium", cmyk: [72, 0, 12, 33], tolerance: 4}, // level=404, complexity=36
    {name: "medium turquoise", cmyk: [66, 0, 2, 18], tolerance: 4}, // level=405, complexity=36
    {name: "light blue", cmyk: [25, 6, 0, 45], tolerance: 4}, // level=406, complexity=36
    {name: "light blue", cmyk: [35, 18, 0, 25], tolerance: 4}, // level=407, complexity=36
    {name: "blue pill", cmyk: [66, 39, 0, 7], tolerance: 4}, // level=408, complexity=36
    {name: "dark turquoise", cmyk: [49, 33, 0, 14], tolerance: 4}, // level=409, complexity=36
    {name: "cobalt", cmyk: [64, 48, 0, 33], tolerance: 4}, // level=410, complexity=36
    {name: "rich blue", cmyk: [48, 48, 0, 33], tolerance: 4}, // level=411, complexity=36
    {name: "medium purple", cmyk: [33, 49, 0, 7], tolerance: 4}, // level=412, complexity=36
    {name: "purple", cmyk: [33, 87, 0, 6], tolerance: 4}, // level=414, complexity=36
    {name: "dark orchid", cmyk: [25, 76, 0, 45], tolerance: 4}, // level=415, complexity=36
    {name: "turnip", cmyk: [2, 56, 0, 33], tolerance: 4}, // level=416, complexity=36
    {name: "medium violet red", cmyk: [0, 89, 33, 22], tolerance: 4}, // level=417, complexity=36
    {name: "dog tongue", cmyk: [0, 33, 13, 4], tolerance: 4}, // level=418, complexity=36
    {name: "pale violet red", cmyk: [0, 49, 33, 14], tolerance: 4}, // level=419, complexity=36
    {name: "black beauty plum", cmyk: [0, 33, 29, 74], tolerance: 4}, // level=421, complexity=36
    {name: "pomegranate", cmyk: [0, 69, 66, 4], tolerance: 4}, // level=422, complexity=36
    {name: "pale green", cmyk: [40, 0, 40, 45], tolerance: 4}, // level=423, complexity=37
    {name: "cadet blue", cmyk: [40, 4, 0, 20], tolerance: 4}, // level=424, complexity=37
    {name: "cerulean", cmyk: [98, 10, 0, 20], tolerance: 4}, // level=425, complexity=37
    {name: "medium orchid", cmyk: [12, 60, 0, 20], tolerance: 4}, // level=426, complexity=37
    {name: "turquoise", cmyk: [100, 4, 0, 0], tolerance: 5}, // level=88, complexity=17
    {name: "maroon", cmyk: [0, 80, 30, 7], tolerance: 4}, // level=427, complexity=37
    {name: "carnation", cmyk: [0, 40, 20, 13], tolerance: 4}, // level=428, complexity=37
    {name: "hot pink", cmyk: [0, 53, 30, 20], tolerance: 4}, // level=429, complexity=37
    {name: "red coat", cmyk: [0, 90, 80, 28], tolerance: 4}, // level=430, complexity=37
    {name: "salmon", cmyk: [0, 45, 59, 20], tolerance: 4}, // level=431, complexity=38
    {name: "peachpuff", cmyk: [0, 15, 27, 20], tolerance: 4}, // level=432, complexity=38
    {name: "peru", cmyk: [0, 35, 69, 20], tolerance: 4}, // level=433, complexity=38
    {name: "brick", cmyk: [0, 35, 80, 39], tolerance: 3}, // level=434, complexity=38
    {name: "light goldenrod", cmyk: [0, 7, 45, 20], tolerance: 3}, // level=435, complexity=38
    {name: "olive drab", cmyk: [25, 0, 76, 7], tolerance: 3}, // level=436, complexity=38
    {name: "frog", cmyk: [31, 0, 44, 25], tolerance: 3}, // level=437, complexity=38
    {name: "fraser fir", cmyk: [28, 0, 25, 58], tolerance: 3}, // level=438, complexity=38
    {name: "eton blue", cmyk: [25, 0, 19, 22], tolerance: 3}, // level=439, complexity=38
    {name: "sea green", cmyk: [75, 0, 27, 44], tolerance: 4}, // level=440, complexity=38
    {name: "liberty", cmyk: [25, 0, 5, 14], tolerance: 4}, // level=441, complexity=38
    {name: "masters jacket", cmyk: [64, 0, 13, 75], tolerance: 4}, // level=442, complexity=38
    {name: "emerald city", cmyk: [83, 0, 17, 25], tolerance: 4}, // level=443, complexity=38
    {name: "army uniform", cmyk: [16, 0, 2, 75], tolerance: 4}, // level=444, complexity=38
    {name: "pacific green", cmyk: [75, 0, 8, 14], tolerance: 4}, // level=445, complexity=38
    {name: "light blue", cmyk: [25, 6, 0, 7], tolerance: 4}, // level=446, complexity=38
    {name: "summer sky", cmyk: [75, 21, 0, 13], tolerance: 4}, // level=447, complexity=38
    {name: "malta blue", cmyk: [45, 20, 0, 42], tolerance: 4}, // level=448, complexity=38
    {name: "blue ice", cmyk: [54, 25, 0, 2], tolerance: 4}, // level=449, complexity=38
    {name: "aquamarine", cmyk: [51, 25, 0, 37], tolerance: 4}, // level=450, complexity=38
    {name: "dark orchid", cmyk: [25, 76, 0, 7], tolerance: 4}, // level=451, complexity=38
    {name: "maroon", cmyk: [0, 80, 29, 45], tolerance: 4}, // level=452, complexity=38
    {name: "apple", cmyk: [0, 62, 55, 20], tolerance: 4}, // level=453, complexity=38
    {name: "rose madder", cmyk: [0, 76, 75, 11], tolerance: 4}, // level=454, complexity=38
    {name: "circuit board", cmyk: [43, 0, 60, 60], tolerance: 4}, // level=455, complexity=39
    {name: "rosy brown", cmyk: [0, 24, 24, 20], tolerance: 4}, // level=457, complexity=40
    {name: "indian red", cmyk: [0, 59, 59, 20], tolerance: 4}, // level=458, complexity=40
    {name: "fire brick", cmyk: [0, 81, 81, 20], tolerance: 4}, // level=459, complexity=40
    {name: "misty rose", cmyk: [0, 11, 12, 20], tolerance: 4}, // level=460, complexity=40
    {name: "tomato", cmyk: [0, 61, 72, 20], tolerance: 4}, // level=462, complexity=40
    {name: "light salmon", cmyk: [0, 37, 52, 20], tolerance: 4}, // level=463, complexity=40
    {name: "very dark brown", cmyk: [0, 30, 45, 64], tolerance: 4}, // level=464, complexity=40
    {name: "sienna", cmyk: [0, 49, 72, 20], tolerance: 4}, // level=465, complexity=40
    {name: "orange crush", cmyk: [0, 53, 80, 3], tolerance: 4}, // level=466, complexity=40
    {name: "ivory black", cmyk: [0, 12, 20, 84], tolerance: 4}, // level=467, complexity=40
    {name: "vandyke brown", cmyk: [0, 60, 95, 63], tolerance: 4}, // level=468, complexity=40
    {name: "medium wood", cmyk: [0, 23, 40, 35], tolerance: 4}, // level=469, complexity=40
    {name: "seashell", cmyk: [0, 4, 7, 20], tolerance: 4}, // level=470, complexity=40
    {name: "gold", cmyk: [0, 38, 76, 20], tolerance: 4}, // level=471, complexity=40
    {name: "ochre", cmyk: [0, 42, 83, 20], tolerance: 4}, // level=472, complexity=40
    {name: "bisque", cmyk: [0, 11, 23, 20], tolerance: 4}, // level=473, complexity=40
    {name: "pecan", cmyk: [0, 37, 80, 12], tolerance: 4}, // level=474, complexity=40
    {name: "antique white", cmyk: [0, 6, 14, 20], tolerance: 4}, // level=475, complexity=40
    {name: "bisque", cmyk: [0, 10, 23, 45], tolerance: 4}, // level=476, complexity=40
    {name: "burly wood", cmyk: [0, 17, 39, 20], tolerance: 4}, // level=477, complexity=40
    {name: "eggshell", cmyk: [0, 9, 20, 1], tolerance: 4}, // level=478, complexity=40
    {name: "navajo white", cmyk: [0, 13, 32, 20], tolerance: 4}, // level=479, complexity=40
    {name: "wheat", cmyk: [0, 9, 27, 20], tolerance: 4}, // level=480, complexity=40
    {name: "goldenrod", cmyk: [0, 24, 86, 20], tolerance: 4}, // level=481, complexity=40
    {name: "bartlett pear", cmyk: [0, 17, 78, 20], tolerance: 4}, // level=483, complexity=40
    {name: "dark goldenrod", cmyk: [0, 27, 94, 20], tolerance: 4}, // level=482, complexity=40
    {name: "cornsilk", cmyk: [0, 2, 14, 20], tolerance: 4}, // level=484, complexity=40
    {name: "cream city brick", cmyk: [0, 2, 20, 11], tolerance: 4}, // level=485, complexity=40
    {name: "lemon chiffon", cmyk: [0, 2, 20, 7], tolerance: 4}, // level=486, complexity=40
    {name: "khaki", cmyk: [0, 3, 44, 20], tolerance: 4}, // level=487, complexity=40
    {name: "jolly green", cmyk: [23, 0, 88, 20], tolerance: 4}, // level=488, complexity=40
    {name: "pea", cmyk: [20, 0, 58, 41], tolerance: 4}, // level=489, complexity=40
    {name: "dark olive green", cmyk: [21, 0, 56, 20], tolerance: 4}, // level=490, complexity=40
    {name: "green hornet", cmyk: [20, 0, 36, 48], tolerance: 4}, // level=491, complexity=40
    {name: "seaweed", cmyk: [10, 0, 15, 56], tolerance: 4}, // level=492, complexity=40
    {name: "snake", cmyk: [18, 0, 20, 58], tolerance: 4}, // level=493, complexity=40
    {name: "green lantern", cmyk: [56, 0, 60, 45], tolerance: 4}, // level=494, complexity=40
    {name: "tea leaves", cmyk: [19, 0, 20, 54], tolerance: 4}, // level=495, complexity=40
    {name: "honeydew", cmyk: [6, 0, 6, 20], tolerance: 4}, // level=496, complexity=40
    {name: "dark sea green", cmyk: [24, 0, 24, 20], tolerance: 4}, // level=497, complexity=40
    {name: "limegreen", cmyk: [76, 0, 76, 20], tolerance: 4}, // level=498, complexity=40
    {name: "pastel green", cmyk: [28, 0, 19, 20], tolerance: 4}, // level=499, complexity=40
    {name: "banker's lamp", cmyk: [90, 0, 59, 45], tolerance: 4}, // level=500, complexity=40
    {name: "sea green", cmyk: [67, 0, 38, 20], tolerance: 4}, // level=501, complexity=40
    {name: "green bark", cmyk: [23, 0, 10, 55], tolerance: 4}, // level=502, complexity=40
    {name: "cooler", cmyk: [45, 0, 10, 71], tolerance: 4}, // level=503, complexity=40
    {name: "cadet blue", cmyk: [40, 4, 0, 45], tolerance: 4}, // level=505, complexity=40
    {name: "nypd blue", cmyk: [72, 11, 0, 20], tolerance: 4}, // level=506, complexity=40
    {name: "light sky blue", cmyk: [31, 11, 0, 20], tolerance: 4}, // level=507, complexity=40
    {name: "sky blue", cmyk: [47, 19, 0, 20], tolerance: 4}, // level=508, complexity=40
    {name: "steel blue", cmyk: [61, 28, 0, 20], tolerance: 4}, // level=509, complexity=40
    {name: "slate gray", cmyk: [22, 11, 0, 20], tolerance: 4}, // level=510, complexity=40
    {name: "dodger blue", cmyk: [88, 43, 0, 20], tolerance: 4}, // level=511, complexity=40
    {name: "light steel blue", cmyk: [21, 12, 0, 20], tolerance: 4}, // level=512, complexity=40
    {name: "mailbox", cmyk: [71, 40, 0, 35], tolerance: 4}, // level=513, complexity=40
    {name: "royal blue", cmyk: [72, 54, 0, 20], tolerance: 4}, // level=514, complexity=40
    {name: "purple", cmyk: [39, 81, 0, 20], tolerance: 4}, // level=519, complexity=40
    {name: "medium blue", cmyk: [76, 76, 0, 20], tolerance: 4}, // level=515, complexity=40
    {name: "orchid", cmyk: [0, 49, 2, 20], tolerance: 4}, // level=522, complexity=40
    {name: "slate blue", cmyk: [48, 56, 0, 20], tolerance: 4}, // level=516, complexity=40
    {name: "indigo", cmyk: [45, 90, 0, 67], tolerance: 4}, // level=518, complexity=40
    {name: "purple candy", cmyk: [7, 21, 0, 20], tolerance: 4}, // level=520, complexity=40
    {name: "medium orchid", cmyk: [12, 60, 0, 45], tolerance: 4}, // level=521, complexity=40
    {name: "deep pink", cmyk: [0, 92, 42, 20], tolerance: 4}, // level=523, complexity=40
    {name: "green agate", cmyk: [40, 0, 2, 55], tolerance: 4}, // level=504, complexity=40
    {name: "hot pink", cmyk: [0, 55, 30, 7], tolerance: 4}, // level=524, complexity=40
    {name: "violet red", cmyk: [0, 76, 41, 20], tolerance: 4}, // level=525, complexity=40
    {name: "lavender blush", cmyk: [0, 6, 4, 20], tolerance: 4}, // level=526, complexity=40
    {name: "pink", cmyk: [0, 29, 23, 20], tolerance: 4}, // level=527, complexity=40
    {name: "madder lake deep", cmyk: [0, 80, 79, 11], tolerance: 4}, // level=530, complexity=40
    {name: "light pink", cmyk: [0, 32, 27, 20], tolerance: 4}, // level=528, complexity=40
    {name: "burnt sienna", cmyk: [0, 81, 80, 67], tolerance: 4}, // level=529, complexity=40
    {name: "salmon", cmyk: [0, 45, 59, 45], tolerance: 4}, // level=531, complexity=41
    {name: "tan", cmyk: [0, 35, 69, 45], tolerance: 4}, // level=532, complexity=41
    {name: "goldenrod", cmyk: [0, 24, 85, 15], tolerance: 4}, // level=533, complexity=41
    {name: "holly", cmyk: [45, 0, 85, 49], tolerance: 4}, // level=535, complexity=41
    {name: "light goldenrod", cmyk: [0, 7, 45, 45], tolerance: 4}, // level=534, complexity=41
    {name: "hunter green", cmyk: [65, 0, 65, 63], tolerance: 4}, // level=536, complexity=41
    {name: "big blue bus", cmyk: [65, 39, 0, 35], tolerance: 4}, // level=537, complexity=41
    {name: "alaska sky", cmyk: [81, 55, 0, 45], tolerance: 4}, // level=538, complexity=41
    {name: "fire brick", cmyk: [0, 81, 81, 30], tolerance: 4}, // level=539, complexity=42
    {name: "cola", cmyk: [0, 63, 70, 31], tolerance: 4}, // level=541, complexity=42
    {name: "cadmium red deep", cmyk: [0, 90, 94, 11], tolerance: 4}, // level=540, complexity=42
    {name: "jonathan apple", cmyk: [0, 63, 76, 30], tolerance: 4}, // level=542, complexity=42
    {name: "sepia", cmyk: [0, 60, 81, 63], tolerance: 4}, // level=543, complexity=42
    {name: "feldspar", cmyk: [0, 30, 44, 18], tolerance: 4}, // level=545, complexity=42
    {name: "maroon", cmyk: [0, 70, 99, 59], tolerance: 4}, // level=544, complexity=42
    {name: "dark tan", cmyk: [0, 30, 48, 41], tolerance: 4}, // level=546, complexity=42
    {name: "raw sienna", cmyk: [0, 51, 90, 22], tolerance: 4}, // level=547, complexity=42
    {name: "gold ochre", cmyk: [0, 40, 81, 22], tolerance: 4}, // level=548, complexity=42
    {name: "yellow ochre", cmyk: [0, 43, 90, 11], tolerance: 4}, // level=549, complexity=42
    {name: "latte", cmyk: [0, 30, 64, 38], tolerance: 4}, // level=550, complexity=42
    {name: "beach sand", cmyk: [0, 10, 26, 7], tolerance: 4}, // level=551, complexity=42
    {name: "pyridium orange", cmyk: [0, 30, 98, 6], tolerance: 4}, // level=552, complexity=42
    {name: "semisweet chocolate", cmyk: [0, 22, 83, 10], tolerance: 4}, // level=553, complexity=42
    {name: "beer", cmyk: [0, 18, 74, 10], tolerance: 4}, // level=554, complexity=42
    {name: "green grape", cmyk: [0, 1, 90, 19], tolerance: 4}, // level=555, complexity=42
    {name: "kermit", cmyk: [14, 0, 90, 26], tolerance: 4}, // level=556, complexity=42
    {name: "cat eye", cmyk: [17, 0, 63, 10], tolerance: 4}, // level=557, complexity=42
    {name: "terreverte", cmyk: [40, 0, 84, 63], tolerance: 4}, // level=558, complexity=42
    {name: "kiwi", cmyk: [18, 0, 34, 40], tolerance: 4}, // level=559, complexity=42
    {name: "broccoli", cmyk: [16, 0, 30, 59], tolerance: 4}, // level=560, complexity=42
    {name: "camo", cmyk: [5, 0, 10, 14], tolerance: 4}, // level=561, complexity=42
    {name: "cinnabar green", cmyk: [46, 0, 77, 30], tolerance: 4}, // level=562, complexity=42
    {name: "park ranger", cmyk: [6, 0, 9, 70], tolerance: 4}, // level=563, complexity=42
    {name: "cantaloupe", cmyk: [8, 0, 10, 34], tolerance: 4}, // level=564, complexity=42
    {name: "putting", cmyk: [31, 0, 34, 40], tolerance: 4}, // level=565, complexity=42
    {name: "green taxi", cmyk: [60, 0, 51, 38], tolerance: 4}, // level=566, complexity=42
    {name: "blue lagoon", cmyk: [58, 0, 10, 28], tolerance: 4}, // level=568, complexity=42
    {name: "atlantic green", cmyk: [70, 0, 8, 44], tolerance: 4}, // level=569, complexity=42
    {name: "light sea green", cmyk: [82, 0, 4, 30], tolerance: 4}, // level=570, complexity=42
    {name: "cadet blue", cmyk: [40, 4, 0, 7], tolerance: 4}, // level=571, complexity=42
    {name: "powder blue", cmyk: [23, 3, 0, 10], tolerance: 4}, // level=572, complexity=42
    {name: "lindsay eyes", cmyk: [34, 6, 0, 40], tolerance: 4}, // level=573, complexity=42
    {name: "LCD dark", cmyk: [40, 11, 0, 47], tolerance: 4}, // level=574, complexity=42
    {name: "blue dog", cmyk: [19, 9, 0, 60], tolerance: 4}, // level=575, complexity=42
    {name: "tropical blue", cmyk: [60, 28, 0, 4], tolerance: 4}, // level=576, complexity=42
    {name: "light slate gray", cmyk: [22, 11, 0, 40], tolerance: 4}, // level=577, complexity=42
    {name: "blue bucket", cmyk: [70, 36, 0, 4], tolerance: 4}, // level=578, complexity=42
    {name: "chemical suit", cmyk: [61, 36, 0, 10], tolerance: 4}, // level=579, complexity=42
    {name: "pabst blue", cmyk: [72, 60, 0, 44], tolerance: 4}, // level=580, complexity=42
    {name: "garden plum", cmyk: [10, 21, 0, 51], tolerance: 4}, // level=581, complexity=42
    {name: "wild violet", cmyk: [30, 94, 0, 27], tolerance: 4}, // level=582, complexity=42
    {name: "medium orchid", cmyk: [12, 60, 0, 17], tolerance: 4}, // level=583, complexity=42
    {name: "violet", cmyk: [7, 39, 0, 40], tolerance: 4}, // level=585, complexity=42
    {name: "pink glass", cmyk: [0, 10, 2, 17], tolerance: 4}, // level=586, complexity=42
    {name: "purple fish", cmyk: [0, 36, 7, 30], tolerance: 4}, // level=587, complexity=42
    {name: "sea urchin", cmyk: [0, 44, 10, 59], tolerance: 4}, // level=588, complexity=42
    {name: "deep purple", cmyk: [0, 81, 40, 67], tolerance: 4}, // level=589, complexity=42
    {name: "plum pudding", cmyk: [0, 69, 40, 47], tolerance: 4}, // level=590, complexity=42
    {name: "bordeaux", cmyk: [0, 84, 71, 40], tolerance: 4}, // level=591, complexity=42
    {name: "cherry", cmyk: [0, 60, 57, 8], tolerance: 4}, // level=592, complexity=42
    {name: "rosy brown", cmyk: [0, 24, 24, 45], tolerance: 4}, // level=594, complexity=43
    {name: "indian red", cmyk: [0, 58, 58, 45], tolerance: 4}, // level=595, complexity=43
    {name: "fire brick", cmyk: [0, 81, 81, 45], tolerance: 4}, // level=596, complexity=43
    {name: "scarlet", cmyk: [0, 84, 84, 45], tolerance: 4}, // level=597, complexity=43
    {name: "tomato", cmyk: [0, 61, 73, 45], tolerance: 4}, // level=598, complexity=43
    {name: "salmon", cmyk: [0, 45, 59, 7], tolerance: 4}, // level=599, complexity=43
    {name: "sandstone", cmyk: [0, 16, 21, 35], tolerance: 4}, // level=600, complexity=43
    {name: "light salmon", cmyk: [0, 37, 53, 45], tolerance: 4}, // level=601, complexity=43
    {name: "kidney bean", cmyk: [0, 65, 92, 31], tolerance: 4}, // level=602, complexity=43
    {name: "sienna", cmyk: [0, 49, 73, 45], tolerance: 4}, // level=603, complexity=43
    {name: "deep ochre", cmyk: [0, 47, 77, 55], tolerance: 4}, // level=604, complexity=43
    {name: "coconut shell", cmyk: [0, 37, 65, 26], tolerance: 4}, // level=605, complexity=43
    {name: "seashell", cmyk: [0, 4, 6, 45], tolerance: 4}, // level=606, complexity=43
    {name: "peachpuff", cmyk: [0, 14, 27, 45], tolerance: 4}, // level=607, complexity=43
    {name: "tan", cmyk: [0, 35, 69, 7], tolerance: 4}, // level=609, complexity=43
    {name: "crema", cmyk: [0, 45, 97, 22], tolerance: 4}, // level=610, complexity=43
    {name: "burly wood", cmyk: [0, 17, 39, 45], tolerance: 4}, // level=611, complexity=43
    {name: "cool copper", cmyk: [0, 38, 88, 15], tolerance: 4}, // level=612, complexity=43
    {name: "antique white", cmyk: [0, 6, 14, 45], tolerance: 4}, // level=613, complexity=43
    {name: "raw umber", cmyk: [0, 36, 84, 55], tolerance: 4}, // level=614, complexity=43
    {name: "navajo white", cmyk: [0, 13, 32, 45], tolerance: 4}, // level=615, complexity=43
    {name: "bread", cmyk: [0, 15, 38, 1], tolerance: 4}, // level=616, complexity=43
    {name: "wheat", cmyk: [0, 9, 27, 45], tolerance: 4}, // level=617, complexity=43
    {name: "bronze", cmyk: [0, 14, 41, 45], tolerance: 4}, // level=618, complexity=43
    {name: "goldenrod", cmyk: [0, 24, 86, 45], tolerance: 4}, // level=619, complexity=43
    {name: "dark goldenrod", cmyk: [0, 27, 94, 45], tolerance: 4}, // level=620, complexity=43
    {name: "light goldenrod", cmyk: [0, 8, 45, 7], tolerance: 4}, // level=621, complexity=43
    {name: "cornsilk", cmyk: [0, 2, 14, 45], tolerance: 4}, // level=622, complexity=43
    {name: "light goldenrod", cmyk: [0, 7, 45, 7], tolerance: 4}, // level=623, complexity=43
    {name: "gummi yellow", cmyk: [0, 13, 95, 2], tolerance: 4}, // level=624, complexity=43
    {name: "tank", cmyk: [0, 3, 35, 62], tolerance: 4}, // level=625, complexity=43
    {name: "khaki", cmyk: [0, 4, 44, 45], tolerance: 4}, // level=626, complexity=43
    {name: "lemon chiffon", cmyk: [0, 1, 19, 45], tolerance: 4}, // level=627, complexity=43
    {name: "avocado", cmyk: [6, 0, 55, 37], tolerance: 4}, // level=628, complexity=43
    {name: "key lime pie", cmyk: [11, 0, 55, 21], tolerance: 4}, // level=629, complexity=43
    {name: "watermelon rind", cmyk: [15, 0, 56, 61], tolerance: 4}, // level=630, complexity=43
    {name: "martini olive", cmyk: [15, 0, 57, 36], tolerance: 4}, // level=631, complexity=43
    {name: "avacado", cmyk: [16, 0, 55, 24], tolerance: 4}, // level=632, complexity=43
    {name: "olive drab", cmyk: [24, 0, 76, 45], tolerance: 4}, // level=633, complexity=43
    {name: "dark olive green", cmyk: [21, 0, 56, 45], tolerance: 4}, // level=634, complexity=43
    {name: "green apple", cmyk: [35, 0, 67, 41], tolerance: 4}, // level=635, complexity=43
    {name: "od green", cmyk: [15, 0, 27, 68], tolerance: 4}, // level=636, complexity=43
    {name: "lichen", cmyk: [12, 0, 19, 15], tolerance: 4}, // level=637, complexity=43
    {name: "douglas fir", cmyk: [34, 0, 55, 62], tolerance: 4}, // level=638, complexity=43
    {name: "green cheese", cmyk: [15, 0, 24, 34], tolerance: 4}, // level=639, complexity=43
    {name: "green grass of home", cmyk: [39, 0, 45, 64], tolerance: 4}, // level=640, complexity=43
    {name: "dark sea green", cmyk: [24, 0, 24, 45], tolerance: 4}, // level=642, complexity=43
    {name: "forestgreen", cmyk: [76, 0, 76, 45], tolerance: 4}, // level=643, complexity=43
    {name: "permanent green", cmyk: [95, 0, 79, 21], tolerance: 4}, // level=644, complexity=43
    {name: "england pound", cmyk: [22, 0, 15, 48], tolerance: 4}, // level=645, complexity=43
    {name: "old money", cmyk: [55, 0, 37, 56], tolerance: 4}, // level=646, complexity=43
    {name: "sea green", cmyk: [67, 0, 37, 45], tolerance: 4}, // level=647, complexity=43
    {name: "lampblack", cmyk: [35, 0, 17, 72], tolerance: 4}, // level=648, complexity=43
    {name: "fresh green", cmyk: [57, 0, 28, 15], tolerance: 4}, // level=649, complexity=43
    {name: "blue green algae", cmyk: [55, 0, 14, 48], tolerance: 4}, // level=650, complexity=43
    {name: "natural turquoise", cmyk: [65, 0, 6, 24], tolerance: 4}, // level=651, complexity=43
    {name: "sea green", cmyk: [95, 0, 2, 48], tolerance: 4}, // level=652, complexity=43
    {name: "light sky blue", cmyk: [31, 12, 0, 45], tolerance: 4}, // level=653, complexity=43
    {name: "liz eyes", cmyk: [57, 21, 0, 55], tolerance: 4}, // level=654, complexity=43
    {name: "sky blue", cmyk: [47, 19, 0, 45], tolerance: 4}, // level=655, complexity=43
    {name: "steel blue", cmyk: [61, 28, 0, 45], tolerance: 4}, // level=656, complexity=43
    {name: "indigo dye", cmyk: [91, 43, 0, 45], tolerance: 4}, // level=657, complexity=43
    {name: "lake erie", cmyk: [42, 21, 0, 35], tolerance: 4}, // level=658, complexity=43
    {name: "dodger blue", cmyk: [88, 44, 0, 45], tolerance: 4}, // level=659, complexity=43
    {name: "slate gray", cmyk: [22, 12, 0, 45], tolerance: 4}, // level=660, complexity=43
    {name: "cat eye", cmyk: [45, 24, 0, 13], tolerance: 4}, // level=661, complexity=43
    {name: "light steel blue", cmyk: [21, 12, 0, 45], tolerance: 4}, // level=662, complexity=43
    {name: "blue spider", cmyk: [65, 36, 0, 57], tolerance: 4}, // level=663, complexity=43
    {name: "blue ridge mtns", cmyk: [65, 37, 0, 19], tolerance: 4}, // level=664, complexity=43
    {name: "parrot", cmyk: [76, 45, 0, 14], tolerance: 4}, // level=665, complexity=43
    {name: "neptune", cmyk: [55, 36, 0, 5], tolerance: 4}, // level=666, complexity=43
    {name: "blueberry fresh", cmyk: [49, 35, 0, 32], tolerance: 4}, // level=667, complexity=43
    {name: "royal blue", cmyk: [72, 54, 0, 45], tolerance: 4}, // level=668, complexity=43
    {name: "delft", cmyk: [69, 55, 0, 58], tolerance: 4}, // level=669, complexity=43
    {name: "dark slate blue", cmyk: [48, 56, 0, 45], tolerance: 4}, // level=670, complexity=43
    {name: "slate blue", cmyk: [49, 57, 0, 45], tolerance: 4}, // level=671, complexity=43
    {name: "blue deep", cmyk: [52, 97, 0, 55], tolerance: 4}, // level=672, complexity=43
    {name: "purple", cmyk: [39, 81, 0, 45], tolerance: 4}, // level=673, complexity=43
    {name: "orchid", cmyk: [0, 49, 1, 45], tolerance: 4}, // level=674, complexity=43
    {name: "blue corn chips", cmyk: [0, 11, 2, 65], tolerance: 4}, // level=676, complexity=43
    {name: "violet red", cmyk: [0, 85, 31, 18], tolerance: 4}, // level=677, complexity=43
    {name: "deep pink", cmyk: [0, 93, 42, 45], tolerance: 4}, // level=678, complexity=43
    {name: "hot pink", cmyk: [0, 58, 29, 45], tolerance: 4}, // level=679, complexity=43
    {name: "violet red", cmyk: [0, 76, 41, 45], tolerance: 4}, // level=680, complexity=43
    {name: "lavender blush", cmyk: [0, 6, 4, 45], tolerance: 4}, // level=681, complexity=43
    {name: "maroon", cmyk: [0, 73, 45, 31], tolerance: 4}, // level=682, complexity=43
    {name: "bunny eye", cmyk: [0, 59, 44, 35], tolerance: 4}, // level=683, complexity=43
    {name: "pink", cmyk: [0, 29, 22, 45], tolerance: 4}, // level=684, complexity=43
    {name: "light pink", cmyk: [0, 32, 27, 45], tolerance: 4}, // level=685, complexity=43
    {name: "venetianred", cmyk: [0, 88, 85, 17], tolerance: 4}, // level=686, complexity=43
    {name: "burgundy", cmyk: [0, 97, 95, 38], tolerance: 4}, // level=687, complexity=43
    {name: "dustyrose", cmyk: [0, 26, 26, 48], tolerance: 4}, // level=689, complexity=45
    {name: "salmon", cmyk: [0, 41, 41, 56], tolerance: 4}, // level=690, complexity=45
    {name: "rosy brown", cmyk: [0, 24, 24, 26], tolerance: 4}, // level=691, complexity=45
    {name: "salmon", cmyk: [0, 43, 43, 22], tolerance: 4}, // level=692, complexity=45
    {name: "rosy brown", cmyk: [0, 24, 24, 7], tolerance: 4}, // level=693, complexity=45
    {name: "brownmadder", cmyk: [0, 81, 81, 14], tolerance: 4}, // level=694, complexity=45
    {name: "lightcoral", cmyk: [0, 47, 47, 6], tolerance: 4}, // level=695, complexity=45
    {name: "indian red", cmyk: [0, 58, 58, 7], tolerance: 4}, // level=696, complexity=45
    {name: "fire brick", cmyk: [0, 82, 82, 7], tolerance: 4}, // level=697, complexity=45
    {name: "bing cherry", cmyk: [0, 77, 79, 37], tolerance: 4}, // level=698, complexity=45
    {name: "bacon", cmyk: [0, 53, 56, 22], tolerance: 4}, // level=699, complexity=45
    {name: "watermelon pulp", cmyk: [0, 71, 74, 5], tolerance: 4}, // level=700, complexity=45
    {name: "red delicious apple", cmyk: [0, 88, 94, 38], tolerance: 4}, // level=701, complexity=45
    {name: "piglet snout", cmyk: [0, 17, 19, 7], tolerance: 4}, // level=702, complexity=45
    {name: "misty rose", cmyk: [0, 11, 12, 7], tolerance: 4}, // level=703, complexity=45
    {name: "salmon", cmyk: [0, 49, 54, 2], tolerance: 4}, // level=704, complexity=45
    {name: "fuji apple", cmyk: [0, 48, 54, 16], tolerance: 4}, // level=705, complexity=45
    {name: "red roof", cmyk: [0, 53, 61, 22], tolerance: 4}, // level=706, complexity=45
    {name: "burnt umber", cmyk: [0, 63, 74, 46], tolerance: 4}, // level=707, complexity=45
    {name: "tomato", cmyk: [0, 61, 72, 7], tolerance: 4}, // level=708, complexity=45
    {name: "manatee gray", cmyk: [0, 6, 7, 31], tolerance: 4}, // level=709, complexity=45
    {name: "english red", cmyk: [0, 71, 88, 17], tolerance: 4}, // level=710, complexity=45
    {name: "pummelo pulp", cmyk: [0, 51, 63, 4], tolerance: 4}, // level=711, complexity=45
    {name: "chili powder", cmyk: [0, 68, 88, 22], tolerance: 4}, // level=712, complexity=45
    {name: "dark salmon", cmyk: [0, 36, 48, 9], tolerance: 4}, // level=713, complexity=45
    {name: "soylent red", cmyk: [0, 71, 97, 12], tolerance: 4}, // level=714, complexity=45
    {name: "light salmon", cmyk: [0, 37, 52, 7], tolerance: 4}, // level=715, complexity=45
    {name: "sienna", cmyk: [0, 49, 72, 37], tolerance: 4}, // level=716, complexity=45
    {name: "burnt sienna", cmyk: [0, 61, 89, 46], tolerance: 4}, // level=717, complexity=45
    {name: "brown ochre", cmyk: [0, 51, 77, 47], tolerance: 4}, // level=719, complexity=45
    {name: "apricot", cmyk: [0, 36, 57, 2], tolerance: 4}, // level=720, complexity=45
    {name: "mars orange", cmyk: [0, 54, 87, 41], tolerance: 4}, // level=721, complexity=45
    {name: "mandarian orange", cmyk: [0, 47, 78, 11], tolerance: 4}, // level=722, complexity=45
    {name: "semisweet chocolate", cmyk: [0, 38, 64, 58], tolerance: 4}, // level=723, complexity=45
    {name: "light wood", cmyk: [0, 17, 29, 9], tolerance: 4}, // level=724, complexity=45
    {name: "seashell", cmyk: [0, 4, 7, 7], tolerance: 4}, // level=725, complexity=45
    {name: "sign brown", cmyk: [0, 47, 82, 62], tolerance: 4}, // level=726, complexity=45
    {name: "mars yellow", cmyk: [0, 51, 89, 11], tolerance: 4}, // level=727, complexity=45
    {name: "cantaloupe pulp", cmyk: [0, 38, 68, 2], tolerance: 4}, // level=728, complexity=45
    {name: "tan", cmyk: [0, 43, 79, 7], tolerance: 4}, // level=729, complexity=45
    {name: "titanium", cmyk: [0, 4, 7, 29], tolerance: 4}, // level=730, complexity=45
    {name: "copper", cmyk: [0, 38, 72, 28], tolerance: 4}, // level=731, complexity=45
    {name: "espresso", cmyk: [0, 14, 29, 9], tolerance: 4}, // level=732, complexity=45
    {name: "linen", cmyk: [0, 4, 8, 2], tolerance: 4}, // level=733, complexity=45
    {name: "mocha latte", cmyk: [0, 13, 26, 21], tolerance: 4}, // level=734, complexity=45
    {name: "cafe americano", cmyk: [0, 26, 54, 79], tolerance: 4}, // level=735, complexity=45
    {name: "melon", cmyk: [0, 26, 54, 11], tolerance: 4}, // level=736, complexity=45
    {name: "pistachio shell", cmyk: [0, 12, 27, 8], tolerance: 4}, // level=737, complexity=45
    {name: "light copper", cmyk: [0, 18, 38, 7], tolerance: 4}, // level=738, complexity=45
    {name: "bisque", cmyk: [0, 11, 23, 7], tolerance: 4}, // level=739, complexity=45
    {name: "cashew", cmyk: [0, 22, 48, 13], tolerance: 4}, // level=740, complexity=45
    {name: "carrot", cmyk: [0, 39, 86, 7], tolerance: 4}, // level=741, complexity=45
    {name: "beige dark", cmyk: [0, 9, 21, 36], tolerance: 4}, // level=742, complexity=45
    {name: "antique white", cmyk: [0, 6, 14, 7], tolerance: 4}, // level=743, complexity=45
    {name: "almond", cmyk: [0, 28, 63, 23], tolerance: 4}, // level=744, complexity=45
    {name: "burly wood", cmyk: [0, 17, 39, 13], tolerance: 4}, // level=745, complexity=45
    {name: "navajo white", cmyk: [0, 13, 32, 7], tolerance: 4}, // level=748, complexity=45
    {name: "kumquat", cmyk: [0, 38, 96, 14], tolerance: 4}, // level=749, complexity=45
    {name: "wheat", cmyk: [0, 9, 27, 7], tolerance: 4}, // level=750, complexity=45
    {name: "oldlace", cmyk: [0, 3, 9, 1], tolerance: 4}, // level=752, complexity=45
    {name: "orange candy", cmyk: [0, 14, 43, 16], tolerance: 4}, // level=753, complexity=45
    {name: "dark wheat", cmyk: [0, 14, 44, 9], tolerance: 4}, // level=754, complexity=45
    {name: "packer gold", cmyk: [0, 28, 92, 1], tolerance: 4}, // level=755, complexity=45
    {name: "canvas", cmyk: [0, 13, 48, 38], tolerance: 4}, // level=756, complexity=45
    {name: "goldenrod", cmyk: [0, 24, 86, 7], tolerance: 4}, // level=757, complexity=45
    {name: "dark goldenrod", cmyk: [0, 27, 94, 28], tolerance: 4}, // level=758, complexity=45
    {name: "ash", cmyk: [0, 2, 9, 22], tolerance: 4}, // level=761, complexity=45
    {name: "golden delicious apple", cmyk: [0, 14, 59, 7], tolerance: 4}, // level=760, complexity=45
    {name: "cornsilk", cmyk: [0, 3, 14, 7], tolerance: 4}, // level=762, complexity=45
    {name: "old gold", cmyk: [0, 13, 71, 19], tolerance: 4}, // level=763, complexity=45
    {name: "sign yellow", cmyk: [0, 17, 91, 1], tolerance: 4}, // level=764, complexity=45
    {name: "pineapple", cmyk: [0, 13, 77, 1], tolerance: 4}, // level=765, complexity=45
    {name: "bright gray", cmyk: [0, 2, 14, 23], tolerance: 4}, // level=766, complexity=45
    {name: "banana", cmyk: [0, 9, 62, 11], tolerance: 4}, // level=767, complexity=45
    {name: "brass", cmyk: [0, 8, 64, 29], tolerance: 4}, // level=768, complexity=45
    {name: "grapefruit", cmyk: [0, 5, 42, 5], tolerance: 4}, // level=769, complexity=45
    {name: "lemon", cmyk: [0, 8, 74, 16], tolerance: 4}, // level=770, complexity=45
    {name: "khaki", cmyk: [0, 4, 42, 6], tolerance: 4}, // level=771, complexity=45
    {name: "corn", cmyk: [0, 6, 63, 2], tolerance: 4}, // level=772, complexity=45
    {name: "pale goldenrod", cmyk: [0, 3, 29, 7], tolerance: 4}, // level=773, complexity=45
    {name: "khaki", cmyk: [0, 3, 44, 7], tolerance: 4}, // level=774, complexity=45
    {name: "dark khaki", cmyk: [0, 3, 43, 26], tolerance: 4}, // level=775, complexity=45
    {name: "yellow perch", cmyk: [0, 4, 49, 12], tolerance: 4}, // level=776, complexity=45
    {name: "anjou pear", cmyk: [0, 6, 96, 27], tolerance: 4}, // level=777, complexity=45
    {name: "yellow candy", cmyk: [0, 1, 41, 7], tolerance: 4}, // level=778, complexity=45
    {name: "pickle", cmyk: [0, 2, 72, 52], tolerance: 4}, // level=779, complexity=45
    {name: "soylent yellow", cmyk: [1, 0, 52, 3], tolerance: 4}, // level=780, complexity=45
    {name: "fire truck green", cmyk: [5, 0, 98, 16], tolerance: 4}, // level=781, complexity=45
    {name: "celery", cmyk: [4, 0, 39, 16], tolerance: 4}, // level=782, complexity=45
    {name: "pear", cmyk: [8, 0, 78, 11], tolerance: 4}, // level=783, complexity=45
    {name: "wasabi sauce", cmyk: [7, 0, 57, 27], tolerance: 4}, // level=784, complexity=45
    {name: "battleship", cmyk: [1, 0, 7, 18], tolerance: 4}, // level=785, complexity=45
    {name: "safety vest", cmyk: [18, 0, 84, 4], tolerance: 4}, // level=786, complexity=45
    {name: "jack pine", cmyk: [18, 0, 77, 69], tolerance: 4}, // level=787, complexity=45
    {name: "chartreuse verte", cmyk: [19, 0, 76, 9], tolerance: 4}, // level=788, complexity=45
    {name: "sweet potato vine", cmyk: [19, 0, 71, 21], tolerance: 4}, // level=789, complexity=45
    {name: "limepulp", cmyk: [11, 0, 39, 7], tolerance: 4}, // level=790, complexity=45
    {name: "chrome", cmyk: [4, 0, 12, 5], tolerance: 4}, // level=791, complexity=45
    {name: "dark olive green", cmyk: [21, 0, 56, 58], tolerance: 4}, // level=792, complexity=45
    {name: "dark olive green", cmyk: [21, 0, 56, 7], tolerance: 4}, // level=793, complexity=45
    {name: "lizard", cmyk: [9, 0, 18, 61], tolerance: 4}, // level=794, complexity=45
    {name: "cactus", cmyk: [11, 0, 22, 56], tolerance: 4}, // level=795, complexity=45
    {name: "fenway grass", cmyk: [26, 0, 52, 56], tolerance: 4}, // level=796, complexity=45
    {name: "romaine lettuce", cmyk: [29, 0, 58, 67], tolerance: 4}, // level=797, complexity=45
    {name: "kakapo", cmyk: [34, 0, 69, 56], tolerance: 4}, // level=798, complexity=45
    {name: "mint candy", cmyk: [16, 0, 32, 27], tolerance: 4}, // level=799, complexity=45
    {name: "tree moss", cmyk: [36, 0, 68, 38], tolerance: 4}, // level=800, complexity=45
    {name: "limerind", cmyk: [37, 0, 71, 69], tolerance: 4}, // level=801, complexity=45
    {name: "flight jacket", cmyk: [6, 0, 11, 47], tolerance: 4}, // level=802, complexity=45
    {name: "green mist", cmyk: [21, 0, 39, 7], tolerance: 4}, // level=803, complexity=45
    {name: "mtn dew bottle", cmyk: [29, 0, 52, 52], tolerance: 4}, // level=804, complexity=45
    {name: "green pepper", cmyk: [54, 0, 98, 51], tolerance: 4}, // level=805, complexity=45
    {name: "seaweed roll", cmyk: [11, 0, 19, 49], tolerance: 4}, // level=806, complexity=45
    {name: "neon green", cmyk: [47, 0, 82, 4], tolerance: 4}, // level=807, complexity=45
    {name: "forest green", cmyk: [32, 0, 54, 51], tolerance: 4}, // level=808, complexity=45
    {name: "camo", cmyk: [14, 0, 23, 29], tolerance: 4}, // level=809, complexity=45
    {name: "guacamole", cmyk: [23, 0, 38, 16], tolerance: 4}, // level=810, complexity=45
    {name: "green goo", cmyk: [13, 0, 21, 46], tolerance: 4}, // level=811, complexity=45
    {name: "pond scum", cmyk: [17, 0, 29, 51], tolerance: 4}, // level=812, complexity=45
    {name: "royal palm", cmyk: [39, 0, 63, 59], tolerance: 4}, // level=813, complexity=45
    {name: "green LED", cmyk: [63, 0, 96, 1], tolerance: 4}, // level=814, complexity=45
    {name: "spinach", cmyk: [28, 0, 42, 64], tolerance: 4}, // level=815, complexity=45
    {name: "olive", cmyk: [37, 0, 54, 63], tolerance: 4}, // level=816, complexity=45
    {name: "kelly", cmyk: [59, 0, 88, 27], tolerance: 4}, // level=817, complexity=45
    {name: "nerf green", cmyk: [68, 0, 94, 11], tolerance: 4}, // level=818, complexity=45
    {name: "leaf", cmyk: [51, 0, 67, 32], tolerance: 4}, // level=819, complexity=45
    {name: "grass", cmyk: [59, 0, 73, 26], tolerance: 4}, // level=820, complexity=45
    {name: "mint ice cream", cmyk: [13, 0, 16, 11], tolerance: 4}, // level=821, complexity=45
    {name: "camo", cmyk: [16, 0, 18, 21], tolerance: 4}, // level=822, complexity=45
    {name: "100 euro", cmyk: [32, 0, 37, 22], tolerance: 4}, // level=823, complexity=45
    {name: "green soap", cmyk: [37, 0, 42, 13], tolerance: 4}, // level=824, complexity=45
    {name: "new $20", cmyk: [8, 0, 9, 22], tolerance: 4}, // level=825, complexity=45
    {name: "wales", cmyk: [63, 0, 64, 21], tolerance: 4}, // level=826, complexity=45
    {name: "darkgreen", cmyk: [41, 0, 41, 69], tolerance: 4}, // level=827, complexity=45
    {name: "medium sea green", cmyk: [41, 0, 41, 56], tolerance: 4}, // level=828, complexity=45
    {name: "dark sea green", cmyk: [24, 0, 24, 26], tolerance: 4}, // level=829, complexity=45
    {name: "honeydew", cmyk: [6, 0, 6, 7], tolerance: 4}, // level=830, complexity=45
    {name: "chartreuse", cmyk: [43, 0, 43, 22], tolerance: 4}, // level=831, complexity=45
    {name: "dark sea green", cmyk: [24, 0, 24, 7], tolerance: 4}, // level=832, complexity=45
    {name: "light green", cmyk: [39, 0, 39, 7], tolerance: 4}, // level=833, complexity=45
    {name: "pale green", cmyk: [39, 0, 39, 2], tolerance: 4}, // level=834, complexity=45
    {name: "green MM", cmyk: [59, 0, 58, 28], tolerance: 4}, // level=835, complexity=45
    {name: "cobalt green", cmyk: [58, 0, 56, 43], tolerance: 4}, // level=836, complexity=45
    {name: "shamrock shake", cmyk: [14, 0, 13, 18], tolerance: 4}, // level=837, complexity=45
    {name: "gummi green", cmyk: [83, 0, 77, 17], tolerance: 4}, // level=838, complexity=45
    {name: "emerald", cmyk: [42, 0, 36, 39], tolerance: 4}, // level=839, complexity=45
    {name: "green stamp", cmyk: [34, 0, 28, 52], tolerance: 4}, // level=840, complexity=45
    {name: "pool table", cmyk: [74, 0, 58, 27], tolerance: 4}, // level=841, complexity=45
    {name: "clover", cmyk: [61, 0, 47, 37], tolerance: 4}, // level=842, complexity=45
    {name: "scotland pound", cmyk: [36, 0, 27, 56], tolerance: 4}, // level=843, complexity=45
    {name: "LCD back", cmyk: [19, 0, 13, 29], tolerance: 4}, // level=844, complexity=45
    {name: "Coke bottle", cmyk: [28, 0, 19, 34], tolerance: 4}, // level=845, complexity=45
    {name: "vanilla mint", cmyk: [16, 0, 11, 16], tolerance: 4}, // level=846, complexity=45
    {name: "aquaman", cmyk: [71, 0, 48, 26], tolerance: 4}, // level=847, complexity=45
    {name: "pumice", cmyk: [27, 0, 16, 36], tolerance: 4}, // level=848, complexity=45
    {name: "green party", cmyk: [42, 0, 26, 58], tolerance: 4}, // level=849, complexity=45
    {name: "cucumber", cmyk: [53, 0, 32, 64], tolerance: 4}, // level=850, complexity=45
    {name: "park bench", cmyk: [54, 0, 32, 61], tolerance: 4}, // level=851, complexity=45
    {name: "sea green", cmyk: [67, 0, 38, 7], tolerance: 4}, // level=852, complexity=45
    {name: "octopus", cmyk: [64, 0, 36, 43], tolerance: 4}, // level=853, complexity=45
    {name: "fisherman's float", cmyk: [23, 0, 11, 51], tolerance: 4}, // level=854, complexity=45
    {name: "go", cmyk: [69, 0, 34, 16], tolerance: 4}, // level=855, complexity=45
    {name: "brushed aluminum", cmyk: [8, 0, 4, 23], tolerance: 4}, // level=856, complexity=45
    {name: "packer green", cmyk: [46, 0, 21, 76], tolerance: 4}, // level=857, complexity=45
    {name: "ooze", cmyk: [49, 0, 23, 52], tolerance: 4}, // level=858, complexity=45
    {name: "army men", cmyk: [57, 0, 26, 54], tolerance: 4}, // level=859, complexity=45
    {name: "green visor", cmyk: [36, 0, 16, 53], tolerance: 4}, // level=860, complexity=45
    {name: "emerald green", cmyk: [77, 0, 29, 32], tolerance: 4}, // level=861, complexity=45
    {name: "bluegrass", cmyk: [32, 0, 11, 56], tolerance: 4}, // level=862, complexity=45
    {name: "indigo", cmyk: [76, 0, 24, 47], tolerance: 4}, // level=863, complexity=45
    {name: "coldgrey", cmyk: [7, 0, 2, 46], tolerance: 4}, // level=864, complexity=45
    {name: "garden hose", cmyk: [87, 0, 26, 44], tolerance: 4}, // level=865, complexity=45
    {name: "green card", cmyk: [17, 0, 5, 2], tolerance: 4}, // level=866, complexity=45
    {name: "electric turquoise", cmyk: [69, 0, 19, 9], tolerance: 4}, // level=867, complexity=45
    {name: "6 ball", cmyk: [73, 0, 17, 61], tolerance: 4}, // level=868, complexity=45
    {name: "turquoise", cmyk: [93, 0, 21, 13], tolerance: 4}, // level=869, complexity=45
    {name: "green ash", cmyk: [28, 0, 6, 44], tolerance: 4}, // level=870, complexity=45
    {name: "dark green copper", cmyk: [37, 0, 7, 54], tolerance: 4}, // level=871, complexity=45
    {name: "green scrubs", cmyk: [44, 0, 8, 44], tolerance: 4}, // level=872, complexity=45
    {name: "mediterranean", cmyk: [47, 0, 8, 54], tolerance: 4}, // level=873, complexity=45
    {name: "blue ice", cmyk: [11, 0, 2, 4], tolerance: 4}, // level=874, complexity=45
    {name: "turquoise", cmyk: [71, 0, 7, 12], tolerance: 4}, // level=875, complexity=45
    {name: "manganese blue", cmyk: [98, 0, 6, 34], tolerance: 4}, // level=876, complexity=45
    {name: "mouthwash", cmyk: [99, 0, 5, 23], tolerance: 4}, // level=877, complexity=45
    {name: "cadet blue", cmyk: [41, 1, 0, 37], tolerance: 4}, // level=878, complexity=45
    {name: "swimming pool", cmyk: [56, 3, 0, 7], tolerance: 4}, // level=879, complexity=45
    {name: "fenway monster", cmyk: [39, 2, 0, 52], tolerance: 4}, // level=880, complexity=45
    {name: "old copper", cmyk: [37, 3, 0, 28], tolerance: 4}, // level=881, complexity=45
    {name: "pastel blue", cmyk: [22, 2, 0, 4], tolerance: 4}, // level=882, complexity=45
    {name: "diamond blue", cmyk: [94, 18, 0, 9], tolerance: 4}, // level=883, complexity=45
    {name: "robin's egg", cmyk: [18, 4, 0, 7], tolerance: 4}, // level=884, complexity=45
    {name: "surf", cmyk: [59, 14, 0, 4], tolerance: 4}, // level=885, complexity=45
    {name: "lake michigan", cmyk: [59, 14, 0, 24], tolerance: 4}, // level=886, complexity=45
    {name: "sky blue", cmyk: [43, 12, 0, 8], tolerance: 4}, // level=887, complexity=45
    {name: "caribbean", cmyk: [74, 24, 0, 2], tolerance: 4}, // level=888, complexity=45
    {name: "blue shark", cmyk: [39, 13, 0, 32], tolerance: 4}, // level=889, complexity=45
    {name: "carolina blue", cmyk: [57, 19, 0, 24], tolerance: 4}, // level=890, complexity=45
    {name: "blue line", cmyk: [77, 27, 0, 13], tolerance: 4}, // level=891, complexity=45
    {name: "pacific blue", cmyk: [51, 19, 0, 58], tolerance: 4}, // level=892, complexity=45
    {name: "blue sponge", cmyk: [47, 18, 0, 31], tolerance: 4}, // level=893, complexity=45
    {name: "light sky blue", cmyk: [31, 11, 0, 7], tolerance: 4}, // level=894, complexity=45
    {name: "blue mist", cmyk: [49, 18, 0, 1], tolerance: 4}, // level=895, complexity=45
    {name: "light sky blue", cmyk: [46, 18, 0, 2], tolerance: 4}, // level=896, complexity=45
    {name: "cerulean blue", cmyk: [31, 13, 0, 11], tolerance: 4}, // level=897, complexity=45
    {name: "sky blue", cmyk: [47, 19, 0, 7], tolerance: 4}, // level=898, complexity=45
    {name: "lake huron", cmyk: [37, 16, 0, 42], tolerance: 4}, // level=899, complexity=45
    {name: "steel blue", cmyk: [61, 28, 0, 29], tolerance: 4}, // level=900, complexity=45
    {name: "slate gray", cmyk: [22, 11, 0, 44], tolerance: 4}, // level=902, complexity=45
    {name: "dodger blue", cmyk: [88, 44, 0, 7], tolerance: 4}, // level=903, complexity=45
    {name: "heather blue", cmyk: [12, 6, 0, 18], tolerance: 4}, // level=904, complexity=45
    {name: "seurat blue", cmyk: [42, 22, 0, 23], tolerance: 4}, // level=905, complexity=45
    {name: "blueberry", cmyk: [44, 23, 0, 18], tolerance: 4}, // level=906, complexity=45
    {name: "slate gray", cmyk: [22, 11, 0, 7], tolerance: 4}, // level=907, complexity=45
    {name: "greek roof", cmyk: [63, 34, 0, 37], tolerance: 4}, // level=908, complexity=45
    {name: "picasso blue", cmyk: [99, 53, 0, 1], tolerance: 4}, // level=909, complexity=45
    {name: "lake superior", cmyk: [41, 22, 0, 47], tolerance: 4}, // level=910, complexity=45
    {name: "peafowl", cmyk: [88, 49, 0, 5], tolerance: 4}, // level=911, complexity=45
    {name: "blue tuna", cmyk: [31, 18, 0, 41], tolerance: 4}, // level=912, complexity=45
    {name: "blue corn", cmyk: [37, 21, 0, 68], tolerance: 4}, // level=913, complexity=45
    {name: "light steel blue", cmyk: [21, 12, 0, 13], tolerance: 4}, // level=914, complexity=45
    {name: "light steel blue", cmyk: [21, 12, 0, 7], tolerance: 4}, // level=915, complexity=45
    {name: "lake ontario", cmyk: [53, 31, 0, 36], tolerance: 4}, // level=916, complexity=45
    {name: "blue angels", cmyk: [67, 39, 0, 49], tolerance: 4}, // level=917, complexity=45
    {name: "blue cow", cmyk: [39, 23, 0, 12], tolerance: 4}, // level=918, complexity=45
    {name: "blue jeans", cmyk: [39, 24, 0, 58], tolerance: 4}, // level=919, complexity=45
    {name: "YInMn blue", cmyk: [68, 44, 0, 44], tolerance: 4}, // level=920, complexity=45
    {name: "st louis blues", cmyk: [71, 46, 0, 41], tolerance: 4}, // level=921, complexity=45
    {name: "cornflower blue", cmyk: [58, 37, 0, 7], tolerance: 4}, // level=922, complexity=45
    {name: "natural gas", cmyk: [63, 41, 0, 4], tolerance: 4}, // level=923, complexity=45
    {name: "ulysses butterfly", cmyk: [92, 59, 0, 4], tolerance: 4}, // level=924, complexity=45
    {name: "blue train", cmyk: [61, 41, 0, 42], tolerance: 4}, // level=925, complexity=45
    {name: "royal blue", cmyk: [71, 53, 0, 12], tolerance: 4}, // level=926, complexity=45
    {name: "aluminum", cmyk: [7, 5, 0, 29], tolerance: 4}, // level=928, complexity=45
    {name: "blue velvet", cmyk: [73, 59, 0, 68], tolerance: 4}, // level=929, complexity=45
    {name: "blue grapes", cmyk: [59, 49, 0, 44], tolerance: 4}, // level=930, complexity=45
    {name: "dolphin", cmyk: [17, 14, 0, 48], tolerance: 4}, // level=931, complexity=45
    {name: "nikko blue", cmyk: [41, 36, 0, 13], tolerance: 4}, // level=932, complexity=45
    {name: "silver", cmyk: [8, 7, 0, 2], tolerance: 4}, // level=933, complexity=45
    {name: "blue nile", cmyk: [16, 14, 0, 42], tolerance: 4}, // level=934, complexity=45
    {name: "midnightblue", cmyk: [41, 41, 0, 69], tolerance: 4}, // level=935, complexity=45
    {name: "cornflowerblue", cmyk: [41, 41, 0, 56], tolerance: 4}, // level=936, complexity=45
    {name: "light steel blue", cmyk: [24, 24, 0, 26], tolerance: 4}, // level=937, complexity=45
    {name: "slate blue", cmyk: [43, 43, 0, 22], tolerance: 4}, // level=938, complexity=45
    {name: "quartz", cmyk: [11, 11, 0, 5], tolerance: 4}, // level=939, complexity=45
    {name: "midnightblue", cmyk: [78, 78, 0, 56], tolerance: 4}, // level=940, complexity=45
    {name: "lavender", cmyk: [8, 8, 0, 2], tolerance: 4}, // level=941, complexity=45
    {name: "curacao", cmyk: [51, 52, 0, 27], tolerance: 4}, // level=942, complexity=45
    {name: "ultramarine", cmyk: [87, 93, 0, 44], tolerance: 4}, // level=943, complexity=45
    {name: "presidential blue", cmyk: [43, 49, 0, 67], tolerance: 4}, // level=944, complexity=45
    {name: "dress blue", cmyk: [51, 59, 0, 53], tolerance: 4}, // level=945, complexity=45
    {name: "slate blue", cmyk: [49, 57, 0, 7], tolerance: 4}, // level=946, complexity=45
    {name: "medium slate blue", cmyk: [48, 56, 0, 7], tolerance: 4}, // level=947, complexity=45
    {name: "blue violet", cmyk: [39, 81, 0, 11], tolerance: 4}, // level=948, complexity=45
    {name: "purple", cmyk: [39, 82, 0, 7], tolerance: 4}, // level=949, complexity=45
    {name: "purple rose", cmyk: [22, 63, 0, 53], tolerance: 4}, // level=950, complexity=45
    {name: "ultramarine violet", cmyk: [16, 67, 0, 57], tolerance: 4}, // level=951, complexity=45
    {name: "eggplant", cmyk: [4, 24, 0, 47], tolerance: 4}, // level=952, complexity=45
    {name: "cobalt violet deep", cmyk: [8, 79, 0, 38], tolerance: 4}, // level=953, complexity=45
    {name: "lavender field", cmyk: [2, 37, 0, 53], tolerance: 4}, // level=954, complexity=45
    {name: "orchid", cmyk: [0, 49, 2, 7], tolerance: 4}, // level=955, complexity=45
    {name: "purple ink", cmyk: [0, 31, 3, 39], tolerance: 4}, // level=956, complexity=45
    {name: "dark purple", cmyk: [0, 77, 11, 47], tolerance: 4}, // level=957, complexity=45
    {name: "thistle", cmyk: [0, 56, 14, 29], tolerance: 4}, // level=958, complexity=45
    {name: "pink candy", cmyk: [0, 26, 7, 14], tolerance: 4}, // level=959, complexity=45
    {name: "harold's crayon", cmyk: [0, 82, 27, 29], tolerance: 4}, // level=960, complexity=45
    {name: "cotton candy", cmyk: [0, 28, 12, 3], tolerance: 4}, // level=961, complexity=45
    {name: "grape", cmyk: [0, 32, 14, 67], tolerance: 4}, // level=962, complexity=45
    {name: "barney", cmyk: [0, 77, 34, 17], tolerance: 4}, // level=963, complexity=45
    {name: "deep pink", cmyk: [0, 92, 42, 7], tolerance: 4}, // level=964, complexity=45
    {name: "amethyst", cmyk: [0, 32, 16, 38], tolerance: 4}, // level=965, complexity=45
    {name: "raspberry", cmyk: [0, 72, 36, 47], tolerance: 4}, // level=966, complexity=45
    {name: "20 pound", cmyk: [0, 38, 21, 36], tolerance: 4}, // level=967, complexity=45
    {name: "cranberry", cmyk: [0, 73, 41, 29], tolerance: 4}, // level=968, complexity=45
    {name: "violet red", cmyk: [0, 76, 41, 7], tolerance: 4}, // level=969, complexity=45
    {name: "pink jeep", cmyk: [0, 71, 43, 12], tolerance: 4}, // level=970, complexity=45
    {name: "lavender blush", cmyk: [0, 6, 4, 7], tolerance: 4}, // level=971, complexity=45
    {name: "pink shell", cmyk: [0, 17, 11, 4], tolerance: 4}, // level=972, complexity=45
    {name: "strawberry smoothie", cmyk: [0, 23, 16, 8], tolerance: 4}, // level=973, complexity=45
    {name: "pink", cmyk: [0, 29, 23, 7], tolerance: 4}, // level=974, complexity=45
    {name: "crimson", cmyk: [0, 91, 73, 14], tolerance: 4}, // level=975, complexity=45
    {name: "cranberry jello", cmyk: [0, 69, 54, 4], tolerance: 4}, // level=976, complexity=45
    {name: "pink cloud", cmyk: [0, 32, 26, 4], tolerance: 4}, // level=977, complexity=45
    {name: "permanent redviolet", cmyk: [0, 83, 68, 14], tolerance: 4}, // level=978, complexity=45
    {name: "tongue", cmyk: [0, 32, 27, 9], tolerance: 4}, // level=979, complexity=45
    {name: "light pink", cmyk: [0, 32, 27, 7], tolerance: 4}, // level=980, complexity=45
    {name: "geranium lake", cmyk: [0, 92, 79, 11], tolerance: 4}, // level=981, complexity=45
    {name: "ham", cmyk: [0, 28, 24, 14], tolerance: 4}, // level=982, complexity=45
    {name: "passion fruit", cmyk: [0, 76, 67, 67], tolerance: 4}, // level=983, complexity=45
    {name: "braeburn apple", cmyk: [0, 78, 68, 27], tolerance: 4}, // level=984, complexity=45
    {name: "ruby red", cmyk: [0, 81, 73, 22], tolerance: 4}, // level=985, complexity=45
    {name: "sign red", cmyk: [0, 83, 74, 31], tolerance: 4}, // level=986, complexity=45
    {name: "alizarin crimson", cmyk: [0, 83, 76, 11], tolerance: 4}, // level=987, complexity=45
    {name: "raspberry red", cmyk: [0, 88, 81, 2], tolerance: 4}, // level=988, complexity=45
    {name: "bermuda sand", cmyk: [0, 18, 17, 4], tolerance: 4}, // level=989, complexity=45
    {name: "indian red", cmyk: [0, 87, 82, 31], tolerance: 4}, // level=990, complexity=45
    {name: "conch", cmyk: [0, 19, 18, 18], tolerance: 4}, // level=991, complexity=45
    {name: "hematite", cmyk: [0, 64, 64, 11], tolerance: 4}, // level=992, complexity=45
]
