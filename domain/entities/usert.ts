import {
    attribute,
    hashKey,
    rangeKey,
    table
} from '@aws/dynamodb-data-mapper-annotations';
import {
    embed
} from '@aws/dynamodb-data-mapper';
import "reflect-metadata";


class Achievement {
    @hashKey()
    id: string;
    @attribute()
    achievement: string;
    @attribute()
    score: number;
    @rangeKey()
    createdDateTime: Date;
    @rangeKey()
    achievementDateTime: Date;
}

class Badge {
    @hashKey()
    id: string;
    @attribute()
    achievement: string;
    @attribute()
    score: number;
    @rangeKey()
    createdDateTime: Date;
    @rangeKey()
    achievementDateTime: Date;
}

@table('user')
class User {
    @hashKey()
    id: string;
    @attribute()
    email: string;
    @attribute()
    displayName: string;
    @attribute({ memberType: embed(Achievement) })
    achievements: Array<Achievement>;
    @attribute()
    approver: boolean;
    @attribute({ memberType: embed(Badge) })
    badge: Array<Badge>;
}


export default { User, Achievement, Badge }