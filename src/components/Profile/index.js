import React from 'react';
import {
    Card,
    CardContent,
    Button,
    Typography,
    LinearProgress,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
    Avatar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Alert
} from '@mui/material';
import {
    People as PeopleIcon,
    Person as PersonIcon,
    Comment as CommentIcon,
    Notifications as NotificationsIcon,
    Lock as LockIcon,
    ExitToApp as ExitToAppIcon
} from '@mui/icons-material';

function Profile() {
    const userInfo = {
        level: {
            current: 6,
            next: 7,
            percentage: 0.8125
        },
        challenges: 300,
        name: "HÂN LẬP",
        email: "khangduycntt01@gmail.com",
        account: "GOOGLE",
        accountType: "Bình Thường"
    };

    const menuItems = [
        { icon: <PeopleIcon />, text: "Truyền theo dõi" },
        { icon: <PersonIcon />, text: "Linh Thạch" },
        { icon: <CommentIcon />, text: "Bình luận" },
        { icon: <NotificationsIcon />, text: "Thông báo" },
        { icon: <LockIcon />, text: "Đổi mật khẩu" },
        { icon: <ExitToAppIcon />, text: "Thoát" }
    ];

    const readingHistory = [
        {
            name: "Naruto",
            lastRead: "2024-03-22 15:30",
            latestChapter: "Chương 699"
        },
        {
            name: "One Piece",
            lastRead: "2024-03-21 20:15",
            latestChapter: "Chương 1112"
        },
        {
            name: "Dragon Ball Super",
            lastRead: "2024-03-20 18:45",
            latestChapter: "Chương 102"
        },
        {
            name: "Jujutsu Kaisen",
            lastRead: "2024-03-19 22:30",
            latestChapter: "Chương 253"
        }
    ];

    return (
        <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 2 }}>
            <Grid container spacing={2}>
                {/* Left Sidebar */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent sx={{ p: 0 }}>
                            <Box sx={{ p: 2, bgcolor: 'grey.100', display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ width: 48, height: 48 }} />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        Tài khoản của
                                    </Typography>
                                    <Typography variant="body2">
                                        {userInfo.name}
                                    </Typography>
                                </Box>
                            </Box>
                            <List>
                                {menuItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem button>
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                        {index < menuItems.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={8}>
                    <Card sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6" color="error" gutterBottom>
                                THÔNG TIN CHUNG
                            </Typography>
                            <Divider sx={{ mb: 3 }} />

                            <Grid container spacing={4}>
                                {/* Account Information */}
                                <Grid item xs={12} md={6}>
                                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                        Thông tin tài khoản
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography variant="body2">Cấp {userInfo.level.current}</Typography>
                                            <Typography variant="body2">Cấp {userInfo.level.next}</Typography>
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={userInfo.level.percentage}
                                            sx={{ height: 8, borderRadius: 1 }}
                                        />
                                    </Box>

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                        <Typography>Số linh thạch: {userInfo.challenges}</Typography>
                                        <Button color="primary">Chi tiết</Button>
                                    </Box>

                                    <Box sx={{ mb: 2 }}>
                                        <Typography gutterBottom>
                                            <strong>Họ và tên:</strong> {userInfo.name}
                                        </Typography>
                                        <Typography gutterBottom>
                                            <strong>Email:</strong> {userInfo.email}
                                        </Typography>
                                        <Typography gutterBottom>
                                            <strong>Tài khoản:</strong> {userInfo.account}
                                        </Typography>
                                        <Typography gutterBottom>
                                            <strong>Loại cấp bậc:</strong>{' '}
                                            <Typography component="span" color="error">
                                                {userInfo.accountType}
                                            </Typography>
                                        </Typography>
                                        <Button color="primary" sx={{ pl: 0 }}>
                                            Thay đổi
                                        </Button>
                                    </Box>
                                </Grid>

                                {/* Avatar Section */}
                                <Grid item xs={12} md={6}>
                                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                        Avatar
                                    </Typography>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Avatar
                                            sx={{
                                                width: 150,
                                                height: 150,
                                                margin: '0 auto',
                                                mb: 2
                                            }}
                                        />
                                        <Button
                                            variant="contained"
                                            color="error"
                                            sx={{ mb: 1 }}
                                        >
                                            Chọn ảnh
                                        </Button>
                                        <Typography variant="caption" display="block" color="text.secondary">
                                            jpg,jpeg,gif,png {'<'}2MB
                                        </Typography>
                                        <Typography variant="caption" display="block" color="text.secondary">
                                            Avatar tục tĩu sẽ bị khóa vĩnh viễn
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* Reading History Section */}
                    <Card>
                        <CardContent>
                            <Typography variant="h6" color="error" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ width: 4, height: 20, bgcolor: 'error.main', mr: 1 }} />
                                Truyện theo dõi
                            </Typography>

                            <Alert severity="success" sx={{ my: 2 }}>
                                Truyện mới đọc gần đây sẽ hiển thị ở đầu danh sách.
                            </Alert>

                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ bgcolor: 'grey.900' }}>
                                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>TÊN TRUYỆN</TableCell>
                                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>XEM GẦN NHẤT</TableCell>
                                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>CHAP MỚI NHẤT</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {readingHistory.map((manga, index) => (
                                            <TableRow key={index} hover>
                                                <TableCell>
                                                    <Typography color="primary" sx={{ cursor: 'pointer' }}>
                                                        {manga.name}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>{manga.lastRead}</TableCell>
                                                <TableCell>{manga.latestChapter}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Profile;