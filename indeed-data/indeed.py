def prettyText(title, separator):
    raw = title.split(separator);
    pretty = "";
    for i in range(len(raw)):
        raw[i] = raw[i].capitalize();
        pretty += raw[i] + " ";
    pretty = pretty[:-1]; #remove space at end
    return pretty;

"""
Input must have "+"s or " "s between words if more than word
Returned company is capitalized and has '-' between words
Return position is capitalized and has '+' between words
"""
def formatText(text, splitter):
    if(" " in text):
        textParts = text.split(" ");
    else:
        textParts = text.split("+");
    if(len(textParts) == 1):
        #only one word, no need for additional parsing
        return textParts[0].capitalize();
    parsedText = "";
    for i in range(len(textParts)):
        parsedText = parsedText + textParts[i].capitalize() + splitter;
    parsedText = parsedText[:-1];
    return parsedText;


def buildQuery(company, position):
    company = formatText(company, "-"); 
    position = formatText(position, "+");
    baseUrl = "https://www.indeed.com/cmp/";
    partialUrl = baseUrl + company + "/";
    query = partialUrl + "reviews?fjobtitle=" + position;
    return query;

def printQuery(self):
    print(self.query);
    return;

def processRatings(ratingsData):
    #print("Processing ratings data");
    ratings = [0] * len(ratingsData);
    sum = 0;
    for i in range(0, len(ratingsData)): #build an array of all the ratings, each as a double
        ratings[i] = float(ratingsData[i].text);
    for rating in ratings:
        sum = sum + rating;
    avgRating = sum / len(ratings);
    return avgRating;

def processReviews(reviewsRawData):
    #print("Processing reviews data");
    reviews = [0] * len(reviewsRawData);
    count = 0;
    for review in reviewsRawData:
        currReview = str(review.text);
        reviews[count] = currReview;
        count = count + 1;
    return reviews;

def processPros(prosRawData):
    #print("Processing pros data");
    pros = [0] * len(prosRawData);
    count = 0;
    for pro in prosRawData:
        currPro = str(pro.text);
        pros[count] = currPro;
        count = count + 1;
    return pros;

def processCons(consRawData):
    #print("Processing cons data");
    cons = [0] * len(consRawData);
    count = 0;
    for con in consRawData:
        currCon = str(con.text);
        cons[count] = currCon;
        count = count + 1;
    return cons;
