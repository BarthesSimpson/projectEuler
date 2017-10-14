import time
 
def factor(number):
    """Factor a number"""
    L = []
    for i in range(1, ((number / 2) + 1)):
        if number % i == 0:
            L.append(i)
    return L
 
def sum_factors(x):
    """Sum factors"""
    return sum(x)
 
def find_abundant_Set():
    """Find abundant Set"""
    abundant_Set = set()
    for m in range(0, 28123):
        x = factor(m)
        y = sum_factors(x)
        if m < y:
            abundant_Set.add(m)
        else:
            pass
    return set(sorted(abundant_Set))
 
def find_abundant_sums(xy):
    """Find abundant sums"""
    abundant_Set_a = set()
    for x in xy:
        for y in xy:
            zzz = x + y
            if zzz < 28123:
                abundant_Set_a.add(zzz)
            else:
                pass
    return set(sorted(abundant_Set_a))
 
def set_of_all_integers():
    """Set if all integers"""
    all_integers = set()
    for x in range(0, 28123):
        all_integers.add(x)
    return set(sorted(all_integers))
         
def find_missing_abundant_sums(yz, zz):
    """Find missing abundant sums"""
    all_positive_int = set()
    all_positive_int = zz - yz
    return set(all_positive_int)
 
def main():
    """Main program"""
    start_time = time.clock()
    xy = find_abundant_Set()
    yz = find_abundant_sums(xy)
    zz = set_of_all_integers()
    xz = find_missing_abundant_sums(yz, zz)
    tally = sum(xz)
    print "Tally = ", tally
    run_time = time.clock() - start_time
    print "Run time = ", run_time
             
if __name__ == '__main__':
    main()